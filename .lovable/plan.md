

# Changes

## 1. Remove custom cursor
- Remove `CustomCursor` import and `<CustomCursor />` from `Index.tsx`
- Remove `cursor-none` class from the root div in `Index.tsx`

## 2. Fix map — remove milky overlay, add navigate button
- Remove the CSS filters (`invert`, `hue-rotate`, `brightness`, `contrast`, `saturate`) from the iframe — these cause the milky/washed-out look
- Remove the full-screen `<a>` overlay that blocks the map (currently covers entire map making it non-interactive)
- Add a visible "Nawiguj" button positioned on the map (bottom-right corner) linking to `https://maps.app.goo.gl/G4peTYTon9AsBe2FA`
- Keep the tactical corner decorations and SAT label for aesthetic

