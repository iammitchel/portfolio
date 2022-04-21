const Header = () => {

    const headerRef = useRef(null)

   useEffect(() => {
       
       window.addEventListener('scroll', () => {
           if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
               headerRef.current.classList.add('header__shrink')
           }else{
                headerRef.current.classList.remove('header__shrink')
           }
       })

       return ()=>{
           window.removeEventListener('scroll')
       }
       
   },[])

