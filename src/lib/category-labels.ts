const CATEGORY_LABELS: Record<string, string> = {
  "income-tax": "Income tax",
  gst: "GST",
  nri: "NRI",
  "company-law": "Company law",
  compliance: "Compliance",
  "start-a-business": "Start a business",
};

export function getCategoryLabel(value: string): string {
  return CATEGORY_LABELS[value] ?? value;
}
