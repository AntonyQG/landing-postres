import { motion } from 'motion/react';

export default function PromosView() {
  return (
    <div className="px-5">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Ofertas del Mes</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Aprovecha nuestras promociones exclusivas por tiempo limitado.</p>
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <PromoCard 
          title="Combo Cumpleañero"
          desc="Pastel de chocolate + 12 fresas decoradas"
          badge="Edición Limitada"
          badgeIcon="celebration"
          badgeColor="bg-primary"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNcHGpfcnpLl0f50Mna5LcbqCFCz1gif40nZQnfrNniDeryu8W5X4_Pt-CivMbr_-EMWZWt1CioYPjyEgK0Jf31FM1oHhETE2wsZs4gDfvYh6D0_18e5z4L7Dqt5w69Z2iyvMx_4ohgXdewE69-g9YEc3C35TL2CsJ3gJkzDa-tcAwBEjfRPC9pGrFqjSzrIHySrexoUSDv64d_MkjdWOnDjXls_DrFqbSIKwGlbxU48_aLmZTt0s2J9QqMYPkikiRsRZJuNai0YA"
        />
        <PromoCard 
          title="Día de Fresas"
          desc="2x1 en vasos grandes de fresas con crema"
          badge="Favorito del Público"
          badgeIcon="favorite"
          badgeColor="bg-secondary text-slate-900"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuC_hy7JHGTGX9VbsBx2ABE09O9cLdJS3Fc7hjVASqwRI2TJQbs_f-9A8U6sa4QWpk7Lsl2pRc4dvErr58BFvTpzpVz2WHvGOL2b05Kq6WavDOupmjMehtKzGQToX1ZsVaCC1PIlVf78IBzCORsl9W4J-zLZkj6aPzMmfO47XABOo9QZDkryJiyVjB4ybk36SJEuLo1a-w9ALJDhbaba4IjclvzJ1J-1cS68F13v8SiRXTBF3JkjHdluPKZ46bDHEnzw6aGHgK8qpm00"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 px-1">Más Delicias</h3>
        <div className="grid grid-cols-2 gap-4">
          <MiniPromo 
            title="Caja Sorpresa"
            discount="-15% OFF"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuD0UHeeYzrd30X3iCEzPucxM-oBKpxwQ-102KjxLvusZ4OFEse_eLYKFG6zLA58lvaQgYnZ-nqmwZt8wljUGYlRVRFwGGx_EkagpGSG9FLJ26NMJP2FQvOG2QHxdg2Udpjxy4VBbLtEzmETh4Z--P7YMek9mm_5nY91L9jiPv8ITDRsPaMPc2Njc32U_Q31yhV-9wRF_Z9E-Urw_pJJgV2_5Zubpv0sEhVohngk_NqOoLQIW6iITW6RuD5C7Pl7bbGp6kBRFhCP74XV"
          />
          <MiniPromo 
            title="Pack Brochetas"
            discount="3x2"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDLnwF8nxBg6iF39eJormYTOcjQMGCaAAtm-6SUSM_dhW1Twv207OhajXyzDHSycAEfh6Lzax9gjbrX1ZstxiCMaCu_JVQSMw2HMDF0wbmRlunbn_aN-nOa0zdjcUyt9ZpV9KY7xBzTnqvdsupLCQldyNC0UAibmg_RrfwCRAmVUxlJ9PsRVH1tsPfiImszgBVWSEQGDaraM9v44Xm5w5J-VFiR_RMGQ2aYsdBMq1Y7zIPCJePhKg7gwh-IKr4pXo3tyjIxALwWBX3y"
          />
          <div className="col-span-2 bg-gradient-to-r from-secondary/20 to-primary/10 p-5 rounded-3xl flex items-center justify-between border border-secondary/20">
            <div className="flex-1 pr-4">
              <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/50 dark:bg-white/10 text-[10px] font-bold text-primary mb-1 uppercase tracking-wider">
                Delivery Gratis
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">En pedidos superiores a $25</h4>
              <button className="mt-2 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                Consultar zona
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
            <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromoCard({ title, desc, badge, badgeIcon, badgeColor, img }: any) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="group relative w-full aspect-[4/5] sm:aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${img}")` }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-sm ${badgeColor || 'bg-primary text-white'}`}>
          <span className="material-symbols-outlined text-[16px] mr-1">{badgeIcon}</span>
          {badge}
        </div>
        <h2 className="text-white text-3xl font-extrabold leading-none mb-1">{title}</h2>
        <p className="text-white/80 text-sm mb-4">{desc}</p>
        <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-whatsapp/20">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.58 20.16 9.14 19.78 7.85 19.04L7.55 18.86L4.43 19.68L5.26 16.64L5.06 16.33C4.24 15.02 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.61 14.9C16.36 14.78 15.14 14.18 14.91 14.1C14.68 14.02 14.51 13.98 14.34 14.23C14.17 14.48 13.69 15.04 13.54 15.21C13.39 15.38 13.24 15.4 12.99 15.28C12.74 15.15 11.94 14.89 10.99 14.05C10.25 13.39 9.75 12.58 9.62 12.33C9.49 12.08 9.61 11.96 9.73 11.84C9.84 11.73 9.98 11.56 10.1 11.41C10.22 11.26 10.27 11.16 10.34 11.01C10.42 10.86 10.38 10.73 10.33 10.63C10.28 10.53 9.87 9.51 9.69 9.09C9.51 8.68 9.33 8.74 9.19 8.74C9.06 8.74 8.91 8.73 8.76 8.73C8.61 8.73 8.36 8.79 8.16 9.01C7.96 9.23 7.38 9.77 7.38 10.87C7.38 11.97 8.18 13.04 8.3 13.21C8.42 13.37 9.92 15.68 12.21 16.67C13.82 17.37 14.45 17.23 15.35 17.09C16.14 16.97 16.99 16.52 17.17 16.02C17.35 15.52 17.35 15.09 17.3 15.01C17.25 14.92 17.11 14.88 16.86 14.76V14.9H16.61Z"></path></svg>
          <span>Solicitar por WhatsApp</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

function MiniPromo({ title, discount, img }: any) {
  return (
    <motion.div whileHover={{ y: -2 }} className="bg-surface-light dark:bg-surface-dark p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-colors">
      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
        <img src={img} className="w-full h-full object-cover" alt={title} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h4>
        <p className="text-primary font-extrabold text-sm">{discount}</p>
        <button className="text-xs text-slate-400 mt-1 inline-block underline decoration-slate-300">Ver detalles</button>
      </div>
    </motion.div>
  );
}
