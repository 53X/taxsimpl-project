export function CmsSetupNotice() {
  return (
    <div className="rounded-xl border border-dashed bg-muted/30 p-6 text-sm text-muted-foreground">
      <p className="font-medium text-foreground">CMS not connected yet</p>
      <p className="mt-2">
        Add Sanity credentials to <code>.env.local</code>, then editors can publish
        from the admin-only CMS studio.
      </p>
    </div>
  );
}
