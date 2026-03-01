import { motion } from 'motion/react';

export default function ContactView() {
  return (
    <div className="px-4 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/9] mb-8 group"
      >
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeNcHGpfcnpLl0f50Mna5LcbqCFCz1gif40nZQnfrNniDeryu8W5X4_Pt-CivMbr_-EMWZWt1CioYPjyEgK0Jf31FM1oHhETE2wsZs4gDfvYh6D0_18e5z4L7Dqt5w69Z2iyvMx_4ohgXdewE69-g9YEc3C35TL2CsJ3gJkzDa-tcAwBEjfRPC9pGrFqjSzrIHySrexoUSDv64d_MkjdWOnDjXls_DrFqbSIKwGlbxU48_aLmZTt0s2J9QqMYPkikiRsRZJuNai0YA")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
          <h1 className="text-white text-2xl font-extrabold leading-tight mb-1 drop-shadow-sm">
            ¡Hablemos de Postres!
          </h1>
          <p className="text-white/90 text-sm font-medium leading-relaxed">
            Estamos listos para endulzar tu día.
          </p>
        </div>
      </motion.div>

      <div className="w-full max-w-md flex flex-col gap-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 px-2">Síguenos y Contáctanos</h3>
        
        <SocialLink 
          title="WhatsApp"
          desc="Haz tu pedido directo"
          icon={
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.58 20.16 9.14 19.78 7.85 19.04L7.55 18.86L4.43 19.68L5.26 16.64L5.06 16.33C4.24 15.02 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.61 14.9C16.36 14.78 15.14 14.18 14.91 14.1C14.68 14.02 14.51 13.98 14.34 14.23C14.17 14.48 13.69 15.04 13.54 15.21C13.39 15.38 13.24 15.4 12.99 15.28C12.74 15.15 11.94 14.89 10.99 14.05C10.25 13.39 9.75 12.58 9.62 12.33C9.49 12.08 9.61 11.96 9.73 11.84C9.84 11.73 9.98 11.56 10.1 11.41C10.22 11.26 10.27 11.16 10.34 11.01C10.42 10.86 10.38 10.73 10.33 10.63C10.28 10.53 9.87 9.51 9.69 9.09C9.51 8.68 9.33 8.74 9.19 8.74C9.06 8.74 8.91 8.73 8.76 8.73C8.61 8.73 8.36 8.79 8.16 9.01C7.96 9.23 7.38 9.77 7.38 10.87C7.38 11.97 8.18 13.04 8.3 13.21C8.42 13.37 9.92 15.68 12.21 16.67C13.82 17.37 14.45 17.23 15.35 17.09C16.14 16.97 16.99 16.52 17.17 16.02C17.35 15.52 17.35 15.09 17.3 15.01C17.25 14.92 17.11 14.88 16.86 14.76V14.9H16.61Z"></path></svg>
          }
          color="text-[#25D366]"
          bg="bg-[#25D366]/10"
          hoverBg="group-hover:bg-[#25D366]"
        />
        <SocialLink 
          title="Instagram"
          desc="Fotos y novedades diarias"
          icon={
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg>
          }
          color="text-[#E1306C]"
          bg="bg-[#E1306C]/10"
          hoverBg="group-hover:bg-[#E1306C]"
        />
        <SocialLink 
          title="Facebook"
          desc="Comunidad y eventos"
          icon={
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>
          }
          color="text-[#1877F2]"
          bg="bg-[#1877F2]/10"
          hoverBg="group-hover:bg-[#1877F2]"
        />
        <SocialLink 
          title="TikTok"
          desc="Videos de nuestras creaciones"
          icon={
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.09v10.99c-.11 4.54-5.23 7.07-8.97 4.5-2.69-1.85-3.32-5.71-1.47-8.23 1.36-1.85 3.95-2.39 5.92-1.22.13.08.25.17.37.26v4.46c-1.71-.66-3.41.6-3.41 2.3 0 1.25 1.02 2.27 2.27 2.27 1.25 0 2.26-1.02 2.27-2.27V.02h-1.1z"></path></svg>
          }
          color="text-black dark:text-white"
          bg="bg-black/10 dark:bg-white/10"
          hoverBg="group-hover:bg-black dark:group-hover:bg-white"
          hoverText="group-hover:text-white dark:group-hover:text-black"
        />
      </div>

      <div className="w-full mt-10 mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-2">Preguntas Frecuentes</h3>
        <div className="flex flex-col gap-3">
          <FaqItem 
            question="¿Hacen entregas a domicilio?"
            answer="¡Sí! Contamos con servicio a domicilio en toda la zona metropolitana. El costo de envío varía según tu ubicación. Puedes cotizar por WhatsApp."
          />
          <FaqItem 
            question="¿Tienen opciones sin azúcar?"
            answer="Por el momento nuestra especialidad son los postres tradicionales, pero estamos trabajando en una línea Keto y Sugar Free próximamente."
          />
          <FaqItem 
            question="¿Hacen pasteles personalizados?"
            answer="Sí, realizamos pasteles personalizados para cumpleaños y eventos especiales. Se requiere pedir con al menos 3 días de anticipación."
          />
        </div>
      </div>
    </div>
  );
}

function SocialLink({ title, desc, icon, color, bg, hoverBg, hoverText = "group-hover:text-white" }: any) {
  return (
    <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="flex items-center w-full p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-md transition-all group">
      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center mr-4 ${color} ${hoverBg} ${hoverText} transition-colors`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
      </div>
      <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">arrow_forward_ios</span>
    </motion.a>
  );
}

function FaqItem({ question, answer }: any) {
  return (
    <details className="group bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 overflow-hidden">
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
        <span className="font-medium text-slate-800 dark:text-slate-200">{question}</span>
        <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
      </summary>
      <div className="px-4 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
