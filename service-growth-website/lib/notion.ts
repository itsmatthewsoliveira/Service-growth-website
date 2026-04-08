// ─── Notion API Helpers ──────────────────────────────────────────────────────
// Shared utility for creating Notion pages across all lead forms.

const NOTION_API_URL = "https://api.notion.com/v1/pages";
const NOTION_VERSION = "2022-06-28";

export function getNotionCredentials() {
  const token = process.env.NOTION_TOKEN;
  const dbId = process.env.NOTION_DB_ID;
  if (!token || !dbId) {
    throw new Error("Missing Notion credentials in environment variables.");
  }
  return { token, dbId };
}

// ─── Block Builders ──────────────────────────────────────────────────────────

export function headingBlock(level: "heading_2" | "heading_3", text: string) {
  return {
    object: "block" as const,
    type: level,
    [level]: {
      rich_text: [{ type: "text" as const, text: { content: text } }],
    },
  };
}

export function richBlock(label: string, value: string | undefined) {
  return {
    object: "block" as const,
    type: "paragraph" as const,
    paragraph: {
      rich_text: [
        {
          type: "text" as const,
          text: { content: `${label}: ` },
          annotations: { bold: true },
        },
        { type: "text" as const, text: { content: value || "—" } },
      ],
    },
  };
}

export function todoBlock(text: string) {
  return {
    object: "block" as const,
    type: "to_do" as const,
    to_do: {
      rich_text: [{ type: "text" as const, text: { content: text } }],
      checked: false,
    },
  };
}

// ─── Page Creator ────────────────────────────────────────────────────────────

interface CreateNotionPageOptions {
  properties: Record<string, unknown>;
  children?: Record<string, unknown>[];
}

export async function createNotionPage({ properties, children }: CreateNotionPageOptions) {
  const { token, dbId } = getNotionCredentials();

  const body: Record<string, unknown> = {
    parent: { database_id: dbId },
    properties,
  };

  if (children && children.length > 0) {
    body.children = children;
  }

  const response = await fetch(NOTION_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_VERSION,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Notion API error:", data);
    throw new Error(`Failed to create Notion page: ${data?.message || response.status}`);
  }

  return data;
}
