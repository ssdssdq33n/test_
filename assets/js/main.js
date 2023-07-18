const main=document.querySelector('.app')

// const app={
//    danhsach: [
//         {
//             title:'Success',
//             messag:'Anyone with access can view your invited visitors',
//             icon:'ti-check',
//             classs:'suc',
//             duration:1000
//         },
//         {
//             title:'Info',
//             messag:'Anyone with access can view your invited visitors',
//             icon:'ti-info',
//             classs:'error',
//             duration:1000
//         },
//         {
//             title:'Warning',
//             messag:'Anyone with access can view your invited visitors',
//             icon:'ti-alert',
//             classs:'warn',
//             duration:1000
//         }
//     ],
    
//     // loaddanhsach:function(){
//     //   const html= app.danhsach.map(function(danh){
//     //     return `
//     //     <div class="success ${danh.classs}">
//     //     <div class="tick">
//     //         <i class="${danh.icon}"></i>
//     //     </div>     
//     //     <div class="noidung">
//     //         <h1>${danh.title}</h1>
//     //         <p>Anyone with access can view your invited visitors</p>
//     //     </div>
//     //     <div class="close">
//     //         <i class="ti-close"></i>
//     //     </div>
//     // </div>
//     //     `
//     //   })
//     //   main.innerHTML=html.join('')
//     // },
//     handledanhsach:function(){
//       const showsuc=document.querySelector('.showsuccess')
//       const showinfo=document.querySelector('.showdanger')
//       const showerror=document.querySelector('.showerror')

//       showsuc.onclick=function(){
//             document.querySelector('.suc').classList.add('active')
//       }
//     },
//     start:function(){
//     //    app.loaddanhsach()
//        app.handledanhsach()
//     }
// }

// app.start()

 function toast({title='',classs='',duration=3000,icon='',icons=''}){
    if(main){
        const toast=document.createElement('div')
        toast.classList.add('success',`${classs}`)

        
        toast.innerHTML=`
        <div class="${icon}">
        <i class="${icons}"></i>
        </div>     
        <div class="noidung">
        <h1>${title}</h1>
        <p>Anyone with access can view your invited visitors</p>
       </div>
       <div class="close">
        <i class="ti-close"></i>
         </div>
        `
        main.appendChild(toast)
        setTimeout(()=>{
            main.removeChild(toast)
        },4000)
    }
 }
 const showsuc=document.querySelector('.showsuccess')
 const showinfo=document.querySelector('.showdanger')
 const showerror=document.querySelector('.showerror')

 showsuc.onclick=function(){
    toast({
        title:'Success',
        classs:'suc',
        duration:3000,
        icon:'tick',
        icons:'ti-check'
    })
 }
 showinfo.onclick=function(){
    toast({
        title:'Info',
        classs:'error',
        duration:3000,
        icon:'info',
        icons:'ti-info'
    })
 }
 showerror.onclick=function(){
    toast({
        title:'Warning',
        classs:'warn',
        duration:3000,
        icon:'warnn',
        icons:'ti-alert'
    })
 }
 