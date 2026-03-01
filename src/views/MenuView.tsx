import { motion } from 'motion/react';

export default function MenuView() {
  return (
    <div className="px-4">
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 px-2">
          <span className="material-symbols-outlined text-primary">cake</span>
          <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">Pasteles Favoritos</h3>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <MenuCard 
            title="Chocoflan Tradicional"
            desc="Deliciosa combinación de pastel de chocolate y flan napolitano."
            price="$45"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuD0UHeeYzrd30X3iCEzPucxM-oBKpxwQ-102KjxLvusZ4OFEse_eLYKFG6zLA58lvaQgYnZ-nqmwZt8wljUGYlRVRFwGGx_EkagpGSG9FLJ26NMJP2FQvOG2QHxdg2Udpjxy4VBbLtEzmETh4Z--P7YMek9mm_5nY91L9jiPv8ITDRsPaMPc2Njc32U_Q31yhV-9wRF_Z9E-Urw_pJJgV2_5Zubpv0sEhVohngk_NqOoLQIW6iITW6RuD5C7Pl7bbGp6kBRFhCP74XV"
          />
          <MenuCard 
            title="Pastel de Zanahoria"
            desc="Con betún de queso crema y nueces picadas."
            price="$50"
            icon="cake"
          />
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 px-2">
          <span className="material-symbols-outlined text-primary">bakery_dining</span>
          <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">Postres Caseros</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <GridCard 
            title="Fresas con Crema"
            price="$60"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNcHGpfcnpLl0f50Mna5LcbqCFCz1gif40nZQnfrNniDeryu8W5X4_Pt-CivMbr_-EMWZWt1CioYPjyEgK0Jf31FM1oHhETE2wsZs4gDfvYh6D0_18e5z4L7Dqt5w69Z2iyvMx_4ohgXdewE69-g9YEc3C35TL2CsJ3gJkzDa-tcAwBEjfRPC9pGrFqjSzrIHySrexoUSDv64d_MkjdWOnDjXls_DrFqbSIKwGlbxU48_aLmZTt0s2J9QqMYPkikiRsRZJuNai0YA"
          />
          <GridCard 
            title="Carlota de Limón"
            price="$40"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuC_hy7JHGTGX9VbsBx2ABE09O9cLdJS3Fc7hjVASqwRI2TJQbs_f-9A8U6sa4QWpk7Lsl2pRc4dvErr58BFvTpzpVz2WHvGOL2b05Kq6WavDOupmjMehtKzGQToX1ZsVaCC1PIlVf78IBzCORsl9W4J-zLZkj6aPzMmfO47XABOo9QZDkryJiyVjB4ybk36SJEuLo1a-w9ALJDhbaba4IjclvzJ1J-1cS68F13v8SiRXTBF3JkjHdluPKZ46bDHEnzw6aGHgK8qpm00"
          />
        </div>
      </section>

      <section className="mb-4">
        <div className="flex items-center gap-2 mb-4 px-2">
          <span className="material-symbols-outlined text-primary">skillet</span>
          <h3 className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight">Fruta con Chocolate</h3>
        </div>
        <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-5 shadow-sm border border-pink-100 dark:border-white/5">
          <div className="flex flex-col gap-4">
            <div className="w-full h-48 rounded-2xl overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLnwF8nxBg6iF39eJormYTOcjQMGCaAAtm-6SUSM_dhW1Twv207OhajXyzDHSycAEfh6Lzax9gjbrX1ZstxiCMaCu_JVQSMw2HMDF0wbmRlunbn_aN-nOa0zdjcUyt9ZpV9KY7xBzTnqvdsupLCQldyNC0UAibmg_RrfwCRAmVUxlJ9PsRVH1tsPfiImszgBVWSEQGDaraM9v44Xm5w5J-VFiR_RMGQ2aYsdBMq1Y7zIPCJePhKg7gwh-IKr4pXo3tyjIxALwWBX3y" className="w-full h-full object-cover" alt="Brochetas" />
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">Recomendado</div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Brochetas Deluxe</h4>
                <span className="text-primary font-bold text-lg">Desde $35</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Brocheta de fresa, plátano y bombón cubierta con chocolate oscuro o blanco y toppings a elegir.</p>
              <motion.button whileTap={{ scale: 0.95 }} className="w-full py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                </svg>
                Preguntar en Instagram
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MenuCard({ title, desc, price, img, icon }: any) {
  return (
    <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-white/5 rounded-[2rem] p-4 shadow-sm border border-pink-100 dark:border-white/5 flex gap-4">
      <div className="w-28 h-28 shrink-0 rounded-2xl overflow-hidden relative bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
        {img ? (
          <img src={img} className="w-full h-full object-cover" alt={title} />
        ) : (
          <span className="material-symbols-outlined text-slate-400 text-3xl">{icon}</span>
        )}
      </div>
      <div className="flex flex-col justify-between py-1 flex-1">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1">{title}</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{desc}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-primary">Desde {price}</span>
          <button className="px-4 py-2 bg-soft-pink text-primary text-xs font-bold rounded-xl hover:bg-pink-200 transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function GridCard({ title, price, img }: any) {
  return (
    <motion.div whileHover={{ y: -2 }} className="bg-white dark:bg-white/5 rounded-[2rem] p-3 shadow-sm border border-pink-100 dark:border-white/5 flex flex-col">
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 relative group">
        <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={title} />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>
      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{title}</h4>
      <p className="text-primary font-bold text-xs mb-3">Desde {price}</p>
      <button className="w-full py-2 bg-soft-pink text-primary text-xs font-bold rounded-xl hover:bg-pink-200 transition-colors mt-auto">
        Ver más
      </button>
    </motion.div>
  );
}
