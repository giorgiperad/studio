import React from "react";

export interface BentoItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gridColumn?: string;
  gridRow?: string;
  children?: React.ReactNode;
}

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => (
  <section className="section">
    <div className="bento-grid">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bento-item"
          style={{
            gridColumn: item.gridColumn,
            gridRow: item.gridRow,
          }}
        >
          {item.icon && <div className="bento-icon">{item.icon}</div>}
          <h3 className="bento-title">{item.title}</h3>
          <p className="bento-desc">{item.description}</p>
          {item.children}
        </div>
      ))}
    </div>
  </section>
);

export default BentoGrid;
