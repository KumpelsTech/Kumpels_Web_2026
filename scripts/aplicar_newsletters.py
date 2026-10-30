#!/usr/bin/env python3
"""Add a standalone five-edition LinkedIn newsletter archive to the existing BlogPage without overwriting other pages."""
from pathlib import Path
import sys
root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
p = root / "src/components/site/pages.tsx"
if not p.is_file():
    raise SystemExit(f"No se encontró {p}")
s = p.read_text(encoding="utf-8")
start = s.index("export function BlogPage(")
end = s.index("/* ============ BLOG POST", start)
block = s[start:end]
if "<LinkedInNewsletterArchive lang={lang} />" in block:
    print("El archivo ya contiene el archivo de newsletters; no se duplicó.")
    raise SystemExit(0)
needle = '      {/* NEWSLETTER */}'
if needle not in block:
    raise SystemExit('No se encontró el bloque NEWSLETTER de BlogPage; no se realizó ningún cambio.')
block = block.replace(needle, '      {/* CINCO EDICIONES PUBLICADAS EN LINKEDIN */}\n      <LinkedInNewsletterArchive lang={lang} />\n\n' + needle, 1)
s = s[:start] + block + s[end:]
if 'import { LinkedInNewsletterArchive } from "./LinkedInNewsletterArchive";' not in s:
    s = 'import { LinkedInNewsletterArchive } from "./LinkedInNewsletterArchive";\n' + s
p.write_text(s, encoding="utf-8")
print(f"Blog actualizado: {p}")
