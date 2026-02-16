
'use client';
import Link from 'next/link';

const Navbar = () => (
  <nav style={{position:'fixed',top:0,left:0,width:'100%',padding:'30px 60px',display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:1000,backdropFilter:'blur(20px)',background:'var(--dark)',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
    <div className="logo" style={{fontFamily:'JetBrains Mono,monospace',fontSize:'1.2em',fontWeight:600,color:'var(--primary)',letterSpacing:'-1px'}}>JD.</div>
    <ul className="nav-links" style={{display:'flex',gap:'40px',listStyle:'none'}}>
      <li><a href="#work">პროექტები</a></li>
      <li><a href="#about">ჩემს შესახებ</a></li>
      <li><a href="#services">სერვისები</a></li>
      <li><a href="#contact">კონტაქტი</a></li>
    </ul>
  </nav>
);

export default Navbar;
