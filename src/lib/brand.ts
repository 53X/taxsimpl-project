/** Canonical brand spellings for user-facing copy. */
export const brandName = "TaxSimpl" as const;
export const legalName = "TaxSimpl Advisors LLP" as const;

/**
 * Normalizes third-party copy (e.g. Google reviews) to approved brand spelling.
 * Fixes capitalization and common transcription typos without altering review meaning.
 */
export function normalizeBrandName(text: string): string {
  return text
    .replace(/\bTaxsimpl Advisors LLP\b/gi, legalName)
    .replace(/\bTaxsimpl Advisors\b/gi, "TaxSimpl Advisors")
    .replace(/\bTaxsimpl Advisor\b/gi, "TaxSimpl Advisor")
    .replace(/\bTeam Taxsimpl\b/gi, "Team TaxSimpl")
    .replace(/\bteam Taxsimpl\b/g, "team TaxSimpl")
    .replace(/\bby Taxsimpl\b/gi, "by TaxSimpl")
    .replace(/\bTaxsimpl\b/g, brandName)
    .replace(/\btaxsimpl\b/g, brandName)
    .replace(/^Or work with TaxSimpl/i, "Our work with TaxSimpl");
}
