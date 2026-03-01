import { motion } from 'motion/react';

export default function HomeView() {
  return (
    <div className="px-4 flex flex-col items-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5] sm:aspect-video mb-8 group"
      >
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeNcHGpfcnpLl0f50Mna5LcbqCFCz1gif40nZQnfrNniDeryu8W5X4_Pt-CivMbr_-EMWZWt1CioYPjyEgK0Jf31FM1oHhETE2wsZs4gDfvYh6D0_18e5z4L7Dqt5w69Z2iyvMx_4ohgXdewE69-g9YEc3C35TL2CsJ3gJkzDa-tcAwBEjfRPC9pGrFqjSzrIHySrexoUSDv64d_MkjdWOnDjXls_DrFqbSIKwGlbxU48_aLmZTt0s2J9QqMYPkikiRsRZJuNai0YA")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col items-start">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium mb-3">
            <span className="material-symbols-outlined text-[16px] mr-1">verified</span>
            100% Casero
          </div>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2 drop-shadow-sm">
            Tentaciones que <br/><span className="text-primary">Enamoran</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed max-w-[280px]">
            Fresas con crema, brochetas de chocolate y los mejores pasteles de la ciudad.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row w-full gap-3 px-2">
        <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
          <span>Explorar Menú</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-white dark:bg-white/5 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 font-bold h-14 rounded-2xl flex items-center justify-center gap-2">
          <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
          </svg>
          <span>Síguenos en Instagram</span>
        </motion.button>
      </div>

      <div className="w-full mt-10">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Populares</h3>
          <button className="text-primary text-sm font-medium hover:underline">Ver todo</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 px-2 -mx-2 snap-x hide-scrollbar">
          {[
            { name: 'Pasteles', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0UHeeYzrd30X3iCEzPucxM-oBKpxwQ-102KjxLvusZ4OFEse_eLYKFG6zLA58lvaQgYnZ-nqmwZt8wljUGYlRVRFwGGx_EkagpGSG9FLJ26NMJP2FQvOG2QHxdg2Udpjxy4VBbLtEzmETh4Z--P7YMek9mm_5nY91L9jiPv8ITDRsPaMPc2Njc32U_Q31yhV-9wRF_Z9E-Urw_pJJgV2_5Zubpv0sEhVohngk_NqOoLQIW6iITW6RuD5C7Pl7bbGp6kBRFhCP74XV' },
            { name: 'Brochetas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLnwF8nxBg6iF39eJormYTOcjQMGCaAAtm-6SUSM_dhW1Twv207OhajXyzDHSycAEfh6Lzax9gjbrX1ZstxiCMaCu_JVQSMw2HMDF0wbmRlunbn_aN-nOa0zdjcUyt9ZpV9KY7xBzTnqvdsupLCQldyNC0UAibmg_RrfwCRAmVUxlJ9PsRVH1tsPfiImszgBVWSEQGDaraM9v44Xm5w5J-VFiR_RMGQ2aYsdBMq1Y7zIPCJePhKg7gwh-IKr4pXo3tyjIxALwWBX3y' },
            { name: 'Fresas/Crema', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_hy7JHGTGX9VbsBx2ABE09O9cLdJS3Fc7hjVASqwRI2TJQbs_f-9A8U6sa4QWpk7Lsl2pRc4dvErr58BFvTpzpVz2WHvGOL2b05Kq6WavDOupmjMehtKzGQToX1ZsVaCC1PIlVf78IBzCORsl9W4J-zLZkj6aPzMmfO47XABOo9QZDkryJiyVjB4ybk36SJEuLo1a-w9ALJDhbaba4IjclvzJ1J-1cS68F13v8SiRXTBF3JkjHdluPKZ46bDHEnzw6aGHgK8qpm00' }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={item.name} 
              className="snap-center shrink-0 w-36 flex flex-col gap-2"
            >
              <div className="w-36 h-36 rounded-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${item.img}")` }}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <span className="text-sm font-semibold text-center text-slate-800 dark:text-slate-200">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
