import React from "react";
import "./HighlightTooltip.css"; // Skapa denna CSS-fil

export default function HighlightTooltip({ text, highlights }) {
  // highlights är en array av objekt: [{ word: "exempel", tooltip: "Detta är en förklaring" }]
  
  // Delar upp texten och ersätter highlightade ord med spans
  const renderText = () => {
    let content = text;
    highlights.forEach(h => {
      const regex = new RegExp(`\\b${h.word}\\b`, "gi");
      content = content.replace(
        regex,
        `<span class="highlight-tooltip" data-tooltip="${h.tooltip}">${h.word}</span>`
      );
    });
    return content;
  };

  return (
    <p dangerouslySetInnerHTML={{ __html: renderText() }} />
  );
}