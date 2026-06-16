import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "taxsimpl",
  title: "TaxSimpl CMS",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    ...(process.env.NODE_ENV === "development"
      ? [visionTool({ defaultApiVersion: apiVersion })]
      : []),
  ],
  schema: { types: schemaTypes },
});
