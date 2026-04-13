export function downloadICS() {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bond//MI6//EN
BEGIN:VEVENT
DTSTART:20260425T153000Z
DTEND:20260426T000000Z
SUMMARY:Piotr's 40th Birthday — CLASSIFIED
LOCATION:Sala pod Kasztanowcami, Wiejca 74, 05-085 Wiejca
DESCRIPTION:Mission briefing: Level 40. Dress code: Bond.
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "piotr-40th-mission.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function getGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Piotr's 40th Birthday — CLASSIFIED",
    dates: "20260425T153000Z/20260426T000000Z",
    location: "Sala pod Kasztanowcami, Wiejca 74, 05-085 Wiejca",
    details: "Mission briefing: Level 40. Dress code: Bond.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
