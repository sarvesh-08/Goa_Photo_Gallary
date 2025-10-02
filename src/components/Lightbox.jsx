import React from 'react'
import { motion } from 'framer-motion'

export default function Lightbox({src, onClose}){
  return (
    <motion.div 
      className="lightbox" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      exit={{opacity:0}} 
      style={{
        position:'fixed', inset:0, display:'flex', 
        alignItems:'center', justifyContent:'center', 
        padding:'2rem', zIndex:60, background:'rgba(0,0,0,0.8)'
      }} 
      onClick={onClose}
    >
      <motion.div 
        className="panel" 
        initial={{scale:0.9}} 
        animate={{scale:1}} 
        exit={{scale:0.9}} 
        transition={{type:'spring', stiffness:300, damping:30}} 
        onClick={e=>e.stopPropagation()} 
        style={{maxWidth:'100%', maxHeight:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}
      >
        <img 
          src={src} 
          alt="lightbox" 
          style={{
            maxWidth:'90vw',   // never exceed viewport width
            maxHeight:'80vh',  // never exceed viewport height
            width:'auto', 
            height:'auto', 
            borderRadius:8,
            objectFit:'contain' // maintain aspect ratio
          }} 
        />
        <div style={{marginTop:12, display:'flex', gap:12}}>
          <a 
            href={src} 
            download 
            style={{padding:'8px 12px', background:'rgba(255,255,255,0.06)', borderRadius:8, textDecoration:'none'}}
          >
            Download
          </a>
          <button 
            onClick={onClose} 
            style={{padding:'8px 12px', background:'rgba(255,255,255,0.06)', borderRadius:8}}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
