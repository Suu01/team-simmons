window.onload = function(){
    const afaq=document.getElementById("faqBtn");
    const aqna=document.getElementById("qnaBtn");
    const atel=document.getElementById("telBtn");
    const aasp=document.getElementById("aspBtn");
    const anotice=document.getElementById("noticeBtn");

    afaq.onclick=function(){
        document.getElementById("faq").style.display="block";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }

    aqna.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="block";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }

    atel.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="block";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";
    }
    
    aasp.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="block";
        document.getElementById("notice").style.display="none";
    }

    anotice.onclick=function(){
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="block";
    }
}