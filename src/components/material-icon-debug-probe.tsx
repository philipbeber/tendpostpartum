"use client";

import { useEffect } from "react";

/** Debug-only: runtime evidence for Material Symbols / Tailwind cascade. */
export function MaterialIconDebugProbe() {
  useEffect(() => {
    const endpoint =
      "http://127.0.0.1:7891/ingest/bdf75cf1-54f5-43c0-8036-054484286803";
    const sessionId = "64144d";

    const send = (payload: Record<string, unknown>) => {
      // #region agent log
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": sessionId,
        },
        body: JSON.stringify({
          sessionId,
          timestamp: Date.now(),
          runId: "post-fix",
          ...payload,
        }),
      }).catch(() => {});
      // #endregion
    };

    const probe = () => {
      const iconEls = document.querySelectorAll(".material-symbols-outlined");
      const el = iconEls[0] ?? null;
      const cs = el ? getComputedStyle(el) : null;
      const allIconText = [...iconEls].map((node) => ({
        rawLen: node.textContent?.length ?? 0,
        raw: node.textContent ?? "",
      }));

      const hrefs = [...document.querySelectorAll("link[rel='stylesheet']")]
        .map((l) => (l as HTMLLinkElement).href)
        .filter(Boolean);

      send({
        hypothesisId: "H1-H5",
        location: "material-icon-debug-probe.tsx:probe",
        message: "material icon DOM + computed styles",
        data: {
          iconCount: iconEls.length,
          firstTextPreview: el?.textContent?.trim().slice(0, 48) ?? null,
          computedFontFamily: cs?.fontFamily ?? null,
          computedFont: cs?.font ?? null,
          computedFontFeatureSettings: cs?.fontFeatureSettings ?? null,
          computedFontVariantLigatures: cs?.fontVariantLigatures ?? null,
          computedFontVariationSettings: cs?.fontVariationSettings ?? null,
          stylesheetLinkCount: hrefs.length,
          hasFontsGoogleusercontentHref: hrefs.some((h) =>
            h.includes("fonts.googleapis.com"),
          ),
          hasFontsGstaticInHref: hrefs.some((h) => h.includes("fonts.gstatic.com")),
          allIconText,
        },
      });

      // #region agent log
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": sessionId,
        },
        body: JSON.stringify({
          sessionId,
          timestamp: Date.now(),
          runId: "post-fix",
          hypothesisId: "H2",
          location: "material-icon-debug-probe.tsx:font-check",
          message: "document.fonts.check Material Symbols Outlined",
          data: {
            check24: document.fonts.check('24px "Material Symbols Outlined"'),
            checkWght300: document.fonts.check(
              '300 24px "Material Symbols Outlined"',
            ),
            fontsSize: document.fonts.size,
          },
        }),
      }).catch(() => {});
      // #endregion
    };

    probe();
    void document.fonts.ready.then(() => {
      // #region agent log
      fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": sessionId,
        },
        body: JSON.stringify({
          sessionId,
          timestamp: Date.now(),
          runId: "post-fix",
          hypothesisId: "H2",
          location: "material-icon-debug-probe.tsx:fonts-ready",
          message: "after fonts.ready recheck",
          data: {
            check24: document.fonts.check('24px "Material Symbols Outlined"'),
            fontsSize: document.fonts.size,
          },
        }),
      }).catch(() => {});
      // #endregion
    });
  }, []);

  return null;
}
