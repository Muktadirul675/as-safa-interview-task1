export default function ThemeButton({ filled = false, flexGrow=false, onClick:onClickFn=null ,children }: { onClick?:null|(()=>void),filled?: boolean, flexGrow?:boolean, children: React.ReactNode }) {
    if (filled) {
        return <button onClick={()=> {
            if(onClickFn) onClickFn()
                else return;
        }} className={`flex items-center gap-1 bg-theme-gradient hover:bg-white text-white p-1.5 md:p-3 rounded-full border border-theme-primary ${flexGrow && 'flex-1 flex justify-center'}`}>
            {children}
        </button>
    }
    return <button onClick={()=> {
            if(onClickFn) onClickFn()
                else return;
        }} className={`bg-white text-black hover:bg-theme-primary hover:text-white transition-all p-1.5 md:p-3 rounded-full border border-theme-primary flex items-center gap-1 ${flexGrow && 'flex-1'}`}>
        {children}
    </button>
}