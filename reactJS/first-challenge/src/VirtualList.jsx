import React, { useState, UIEvent } from "react";

export const VirtualList =({ items, height, itemHeight, renderItem }) => {
  // 2. Track Scroll Position
  const [scrollTop, setScrollTop] = useState(0);

  // 3. Calculate "Phantom" Height
  // This tells the browser: "I have 5000px of content" (even if we don't render it).
  const totalHeight = items.length * itemHeight;

  // 4. The Core Math (Where are we?)
  const startIndex = Math.floor(scrollTop / itemHeight);
  
  // Calculate how many items fit on screen (Math.ceil to be safe)
  const visibleCount = Math.ceil(height / itemHeight); 
  
  // End index is start + visible, but capped at list length
  const endIndex = Math.min(startIndex + visibleCount + 1, items.length);

  // 5. Slice the Data
  // This creates a tiny array of ~20 items from the massive 100,000 array
  const visibleItems = items.slice(startIndex, endIndex);

  // 6. The Offset Logic
  // If we are at index 20, and items are 50px, we must push the list down 1000px.
  const offsetY = startIndex * itemHeight;

  // 7. Handle Scroll
  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${height}px`,
        overflowY: "auto",
        position: "relative", // Needed for absolute positioning context
        border: "1px solid #ccc"
      }}
    >
      {/* The "Phantom" Spacer
         This empty div forces the scrollbar to be the correct size.
      */}
      <div style={{ height: `${totalHeight}px`, position: "relative" }}>
        
        {/* The Visible Window
           This div holds the actual items and moves down as we scroll.
           transform: translateY is more performant than top: px
        */}
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item) => {
             // We pass the actual item to the parent to render
             return renderItem(item);
          })}
        </div>

      </div>
    </div>
  );
};