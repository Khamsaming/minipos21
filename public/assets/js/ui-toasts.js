!function(){let t=document.querySelector(".toast-placement-ex"),e=document.querySelector("#showToastPlacement"),o,l,c;e&&(e.onclick=function(){var e;c&&(e=c)&&null!==e._element&&(t&&(t.querySelectorAll('i[class^="ri-"]').forEach(function(e){e.classList.remove(o)}),DOMTokenList.prototype.remove.apply(t.classList,l)),e.dispose()),o=document.querySelector("#selectTypeOpt").value,l=document.querySelector("#selectPlacement").value.split(" "),t.querySelectorAll('i[class^="ri-"]').forEach(function(e){e.classList.add(o)}),DOMTokenList.prototype.add.apply(t.classList,l),(c=new bootstrap.Toast(t)).show()})}();