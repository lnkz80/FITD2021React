const mnuHead = [
    {
        id: "itdep",
        icon: <svg width="24" height="24"  fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46997 1.5C7.35756 1.50016 7.24662 1.52559 7.14536 1.5744C7.0441 1.62321 6.95511 1.69416 6.88496 1.782L2.30989 7.5H8.99999C9.19891 7.5 9.38968 7.57902 9.53033 7.71967C9.67098 7.86032 9.75 8.05109 9.75 8.25C9.75 8.84674 9.98706 9.41903 10.409 9.84099C10.831 10.2629 11.4033 10.5 12 10.5C12.5968 10.5 13.1691 10.2629 13.5911 9.84099C14.013 9.41903 14.2501 8.84674 14.2501 8.25C14.2501 8.05109 14.3291 7.86032 14.4697 7.71967C14.6104 7.57902 14.8012 7.5 15.0001 7.5H21.6902L17.1151 1.782C17.045 1.69416 16.956 1.62321 16.8547 1.5744C16.7535 1.52559 16.6425 1.50016 16.5301 1.5H7.46997ZM5.71494 0.8445C5.92553 0.581255 6.19257 0.368692 6.49635 0.22252C6.80012 0.076347 7.13286 0.000300644 7.46997 0L16.5301 0C16.8672 0.000300644 17.2 0.076347 17.5037 0.22252C17.8075 0.368692 18.0745 0.581255 18.2851 0.8445L23.8352 7.782C23.8978 7.86016 23.9442 7.95006 23.9715 8.04642C23.9988 8.14277 24.0065 8.24361 23.9942 8.343L23.4092 13.029C23.3412 13.5733 23.0766 14.0741 22.6653 14.437C22.254 14.8 21.7242 15.0002 21.1757 15H2.8244C2.27583 15.0002 1.74607 14.8 1.33475 14.437C0.923436 14.0741 0.658893 13.5733 0.59087 13.029L0.00586111 8.343C-0.00643345 8.24361 0.00130167 8.14277 0.0286102 8.04642C0.0559187 7.95006 0.102247 7.86016 0.164863 7.782L5.71494 0.8445ZM0.187364 16.755C0.257647 16.675 0.344162 16.6109 0.441151 16.5669C0.538141 16.5229 0.643382 16.5001 0.749872 16.5H8.99999C9.19891 16.5 9.38968 16.579 9.53033 16.7197C9.67098 16.8603 9.75 17.0511 9.75 17.25C9.75 17.8467 9.98706 18.419 10.409 18.841C10.831 19.2629 11.4033 19.5 12 19.5C12.5968 19.5 13.1691 19.2629 13.5911 18.841C14.013 18.419 14.2501 17.8467 14.2501 17.25C14.2501 17.0511 14.3291 16.8603 14.4697 16.7197C14.6104 16.579 14.8012 16.5 15.0001 16.5H23.2502C23.3565 16.5 23.4616 16.5227 23.5585 16.5664C23.6555 16.6102 23.742 16.674 23.8123 16.7537C23.8827 16.8334 23.9353 16.9272 23.9666 17.0288C23.998 17.1304 24.0074 17.2375 23.9942 17.343L23.4092 22.029C23.3412 22.5733 23.0766 23.0741 22.6653 23.437C22.254 23.8 21.7242 24.0002 21.1757 24H2.8244C2.27583 24.0002 1.74607 23.8 1.33475 23.437C0.923436 23.0741 0.658893 22.5733 0.59087 22.029L0.00586111 17.343C-0.00740766 17.2375 0.00191337 17.1304 0.0332057 17.0287C0.0644981 16.9271 0.117046 16.8333 0.187364 16.7535V16.755Z"/></svg> ,
        text: "IT Department"}    
]

const mnuList = [
    {
        id: "technics",
        icon: <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0.5V3.5H6.5C5.70435 3.5 4.94129 3.81607 4.37868 4.37868C3.81607 4.94129 3.5 5.70435 3.5 6.5V9.5H0.5V12.5H3.5V15.5H0.5V18.5H3.5V21.5C3.5 22.2956 3.81607 23.0587 4.37868 23.6213C4.94129 24.1839 5.70435 24.5 6.5 24.5H9.5V27.5H12.5V24.5H15.5V27.5H18.5V24.5H21.5C22.2956 24.5 23.0587 24.1839 23.6213 23.6213C24.1839 23.0587 24.5 22.2956 24.5 21.5V18.5H27.5V15.5H24.5V12.5H27.5V9.5H24.5V6.5C24.5 5.70435 24.1839 4.94129 23.6213 4.37868C23.0587 3.81607 22.2956 3.5 21.5 3.5H18.5V0.5H15.5V3.5H12.5V0.5H9.5ZM8 9.5H13.25V11.75H8.75V12.875H11.75C12.1478 12.875 12.5294 13.033 12.8107 13.3143C13.092 13.5956 13.25 13.9772 13.25 14.375V17C13.25 17.3978 13.092 17.7794 12.8107 18.0607C12.5294 18.342 12.1478 18.5 11.75 18.5H8C7.60218 18.5 7.22064 18.342 6.93934 18.0607C6.65804 17.7794 6.5 17.3978 6.5 17V11C6.5 10.6022 6.65804 10.2206 6.93934 9.93934C7.22064 9.65804 7.60218 9.5 8 9.5ZM14.75 9.5H17V12.5H19.25V9.5H21.5V18.5H19.25V14.75H14.75V9.5ZM8.75 15.125V16.25H11V15.125"/></svg>,
        text: "техника",
        submnu: [{id:"os", text: "основные средства"},{id:"rasx", text: "расходники"},{id:"remont", text: "ремонт"},{id:"techjrnl", text: "журнал"}],
        active: true
    },
    {
        id: "docs",
        icon: <svg width="28" height="28" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9.5H0V30.5C0 32.15 1.35 33.5 3 33.5H24V30.5H3V9.5ZM27 3.5H22.2C21.6 1.7 19.95 0.5 18 0.5C16.05 0.5 14.4 1.7 13.8 3.5H9C7.35 3.5 6 4.85 6 6.5V24.5C6 26.15 7.35 27.5 9 27.5H27C28.65 27.5 30 26.15 30 24.5V6.5C30 4.85 28.65 3.5 27 3.5ZM18 3.5C18.9 3.5 19.5 4.25 19.5 5C19.5 5.75 18.75 6.5 18 6.5C17.25 6.5 16.5 5.75 16.5 5C16.5 4.25 17.1 3.5 18 3.5Z" fill="#355B70"/>
        </svg>,
        text: "документы"
        
    },
    {
        id: "cartridges",
        icon: <svg width="28" height="28" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 0H6V6H24V0ZM25.5 13.5C25.1022 13.5 24.7206 13.342 24.4393 13.0607C24.158 12.7794 24 12.3978 24 12C24 11.6022 24.158 11.2206 24.4393 10.9393C24.7206 10.658 25.1022 10.5 25.5 10.5C25.8978 10.5 26.2794 10.658 26.5607 10.9393C26.842 11.2206 27 11.6022 27 12C27 12.3978 26.842 12.7794 26.5607 13.0607C26.2794 13.342 25.8978 13.5 25.5 13.5ZM21 24H9V16.5H21V24ZM25.5 7.5H4.5C3.30653 7.5 2.16193 7.97411 1.31802 8.81802C0.474106 9.66193 0 10.8065 0 12V21H6V27H24V21H30V12C30 10.8065 29.5259 9.66193 28.682 8.81802C27.8381 7.97411 26.6935 7.5 25.5 7.5Z" fill="#355B70"/>
        </svg>,
        text: "картриджи"  
    },
    {
        id: "libs",
        icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 21.5V24.5H9.5V21.5H0.5ZM0.5 3.5V6.5H15.5V3.5H0.5ZM15.5 27.5V24.5H27.5V21.5H15.5V18.5H12.5V27.5H15.5ZM6.5 9.5V12.5H0.5V15.5H6.5V18.5H9.5V9.5H6.5ZM27.5 15.5V12.5H12.5V15.5H27.5ZM18.5 9.5H21.5V6.5H27.5V3.5H21.5V0.5H18.5V9.5Z" fill="#355B70"/>
        </svg>,
        text: "справочники"  
    }
]


export {mnuHead, mnuList}