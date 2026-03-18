import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const resendKey = process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, business_type } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e email são obrigatórios." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error: dbError } = await supabase
      .from("orcamento_leads")
      .upsert(
        { name, email, phone, business_type, source: "orcamento-landing" },
        { onConflict: "email" }
      );

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    // Send email via Resend
    if (resendKey) {
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://servicegrowth.ai";
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "ServiceGrowth.ai <noreply@servicegrowth.ai>",
            to: email,
            subject:
              "Seu Gerador de Orçamento Profissional — ServiceGrowth.ai",
            html: `
              <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0C0C0C;color:#E8E5DF;padding:40px 32px;border-radius:12px;">
                <div style="border-bottom:2px solid #28E8FD;padding-bottom:20px;margin-bottom:24px;">
                  <h1 style="font-size:24px;font-weight:800;margin:0;">SERVICEGROWTH<span style="color:#28E8FD;">.AI</span></h1>
                </div>
                <p style="font-size:16px;margin-bottom:4px;">Opa ${name.split(" ")[0]}!</p>
                <p style="font-size:14px;color:#B0ADA6;line-height:1.7;margin-bottom:24px;">
                  Aqui estão seus arquivos para gerar orçamentos profissionais com IA. Siga as instruções do guia PDF e em menos de 2 minutos você terá um orçamento premium.
                </p>
                <div style="background:#161616;border:1px solid #2A2A2A;border-radius:8px;padding:20px;margin-bottom:16px;">
                  <p style="font-size:11px;font-weight:700;letter-spacing:2px;color:#8A8780;text-transform:uppercase;margin:0 0 12px;">SEUS ARQUIVOS</p>
                  <a href="${baseUrl}/downloads/Guia-Orcamento-Profissional.pdf" style="display:block;background:#28E8FD;color:#000;text-decoration:none;padding:12px 20px;border-radius:6px;font-size:14px;font-weight:600;text-align:center;margin-bottom:10px;">
                    Baixar Guia PDF
                  </a>
                  <a href="${baseUrl}/downloads/PT-BR-Gerador-de-Orcamento-Template.md" style="display:block;background:#1E1E1E;color:#E8E5DF;text-decoration:none;padding:12px 20px;border-radius:6px;font-size:14px;font-weight:600;text-align:center;border:1px solid #2A2A2A;">
                    Baixar Template .md
                  </a>
                </div>
                <div style="background:#161616;border:1px solid #2A2A2A;border-radius:8px;padding:20px;margin-bottom:24px;">
                  <p style="font-size:11px;font-weight:700;letter-spacing:2px;color:#8A8780;text-transform:uppercase;margin:0 0 10px;">PASSOS RÁPIDOS</p>
                  <p style="font-size:13px;color:#B0ADA6;line-height:1.8;margin:0;">
                    <strong style="color:#E8E5DF;">1.</strong> Abra o .md e preencha seus dados<br>
                    <strong style="color:#E8E5DF;">2.</strong> Acesse claude.ai (grátis)<br>
                    <strong style="color:#E8E5DF;">3.</strong> Cole o prompt e aperte Enter<br>
                    <strong style="color:#E8E5DF;">4.</strong> Baixe o HTML, coloque seu logo<br>
                    <strong style="color:#E8E5DF;">5.</strong> Salve como PDF e envie ao cliente
                  </p>
                </div>
                <div style="border-top:1px solid #2A2A2A;padding-top:20px;text-align:center;">
                  <p style="font-size:13px;color:#8A8780;margin:0 0 8px;">Quer mais ferramentas de IA?</p>
                  <a href="https://instagram.com/mateusoliv.ai" style="color:#28E8FD;font-weight:600;font-size:14px;text-decoration:none;">Siga @mateusoliv.ai no Instagram</a>
                </div>
              </div>
            `,
          }),
        });
      } catch (e) {
        console.error("Email error:", e);
      }
    }

    return NextResponse.json({
      success: true,
      downloads: {
        pdf: "/downloads/Guia-Orcamento-Profissional.pdf",
        template_pt: "/downloads/PT-BR-Gerador-de-Orcamento-Template.md",
        template_en: "/downloads/EN-Invoice-Generator-Template.md",
      },
    });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
