/* REMOVED .aui .modal style as it will cause liferay modal calculate position left wrongly */
/* .aui .modal, .aui .modal-content, .aui .modal-body { margin:0 auto; overflow-y:initial; } */
.aui .modal-content, .aui .modal-body { margin:0 auto; overflow-y:initial; }

/* font-size:.875em; CSS COMPILATION ERROR, add semi colon after font-weight */
.aui ::-webkit-input-placeholder { font-size:.875em; font-weight:400; color:#bec0c2; }
.aui :-moz-placeholder { /* older Firefox*/ font-size:.875em; font-weight:400; color:#bec0c2; }
.aui ::-moz-placeholder { /* Firefox 19+ */  font-size:.875em; font-weight:400; color:#bec0c2; } 
.aui :-ms-input-placeholder { font-size:.875em; color:#bec0c2; font-weight:400; }

/* COMMENTED */
/* .aui .modal, .aui .modal-one-column { max-width:300px !important; } */

/* REMOVE MAX HEIGHT */
/* .main-content .bg-lightgrey { padding-top:20px; max-height: 400px; } */
.main-content .bg-lightgrey { padding-top:20px; }

/* added important for scrollable sidebar*/
#uf-dockbar-sidebar { overflow-y:auto !important; }

/* added responsive for modal-body checkbox  .aui .modal-body .checkbox input[type="checkbox"]*/
/* .aui .radio input[type="radio"], .aui .checkbox input[type="checkbox"] { float:none; margin-top:0; } */
.aui .radio input[type="radio"], .aui .checkbox input[type="checkbox"], .aui .modal-body .checkbox input[type="checkbox"] { float:none; margin-top:0; }
    
/* COMMENTED */
/* .aui .modal-body { max-width:280px; } */	
.aui .modal-body { max-width:90%; }
/* .aui .modal-body, .aui .modal-one-column .modal-body { max-width:280px; } */
.aui .modal-body, .aui .modal-one-column .modal-body { max-width:90%; }

/* added important to width for pre-footer-social input*/
.pre-footer-social input.span9 {
    width: 71% !important;
} 

/* added margin left for footer social share container */
@media (max-width: 979px) {
	.aui .pre-footer-social .social-share{margin-left:0px}
}

/* added margin top to override aui btn default margin : 5px */
.aui .cpn-url-box button, .aui .input-append .btn:last-child { 
	margin-top:0px;
} 

/* added not selector for type radio */
.aui input:not([type="checkbox"]):not([type="radio"]), .aui input[type="text"], .aui textarea {
    width:100%; border-width: 0 0 1px; box-shadow:none; color: #172A35;
}

/* added, to set plus icon on middle top */
.load-all-results i{
  width:100%;
}

/* replace */
/* #causes-wrapper .cause-box.span4, .aui #causes-wrapper .cause-box.span4 { 
    width: 27%; margin:1em 2.95% 50px; white-space: nowrap; 
} */
#causes-wrapper .cause-box.span4, .aui #causes-wrapper .cause-box.span4 { 
    width: 27%;
    margin: 1em 2.95% 10px;
    white-space: nowrap;
    min-height: 50px;
}

/* remove color:#6a6c6f; */
#userDetails .validation-feedback i, #payment-type .validation-feedback i { font-size:1em; }

/* change margin-left to from 25% to 20px */
#vw-gft-dtn-prefs .controls { margin-left: 20px; }

/* @media (max-width: 767px) set width to 100% */
/* remove margin left */
@media (max-width: 767px)
#user-about-links .input-append.input-prepend {
    width: 100%; 
    float: left;
    margin-left: 20px;
}

/* change color and background to*/
#user-about-links .input-append.input-prepend .add-on:first-child {
	color:#999; background:#f5f6f6;
}

/* remove float and max width, added cursor:initial*/
/* #shortUrl { max-width:305px; border-color:#DCDDDE !important; float:right; } */
#shortUrl { border-color:#DCDDDE !important; }

/* set width to 100%*/
#user-about-links input#shortUrlGenerator {
   width: 100%;
}
#user-about-links input { padding:6px 5px;}

/* increase input width from 30 to 50*/
.data-list.volunteers-list .data-list-item [class*="span"] input{max-width: 50px;}

/* commented both line */
.aui #cpn-info .carousel-indicators{ top:auto; /* bottom:65px; */ }
#setup-dtn-carousel {/* padding-bottom:48px; */}

/* reduce carousel control height, to prevent it overlap with youtube play/stop button */
.swiper-button-prev, .swiper-button-next, .aui .swiper-button-prev, .aui .swiper-button-next,
.carousel-control, .aui .carousel-control { 
	height:180px; top:calc(50% - 90px);
}

/* use original font size and weight, by kenneth */
.bg-lightgrey h5, .aui .bg-lightgrey h5 { color:#294b5e; /* font-size: 1.25em; */ margin-top:0; font-size: 1em; font-weight:300;}

/* .aui .modal .row-fluid .span6:first-child { padding-left:0; }  */
/* .aui .modal .row-fluid .span6:last-child { padding-right:0; }  */

/* change 10000 to 1000 as it overlaps with nav bar and modal mask */
.aui .dtn-amt-item .dtn-btns{
	z-index:1000;
}

/* add .aui as .dr-img height get overidded by .aui img height:auto*/
.aui .dr-img-wrapper .dr-img.img-circle {
	height: 50px;
	width:50px; 
}

@media (min-width: 1200px) {
	.aui .dr-img-wrapper .dr-img.img-circle	{
		width: 55px;
		height: 55px;
	}
}

/* commented text align*/
#jira-353-content .input-prepend .add-on{
	/* text-align:left; */
}
/* commented */
/* #jira-353-content .input-prepend .box{
	width:70%;
	float: left;
}
#jira-353-content .input-prepend .add-on{
	width: 29%;
	float: left;
} */








