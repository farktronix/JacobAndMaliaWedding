<html>
<head>
<title>Jacob and Malia's Wedding Photos</title>

<link href='http://fonts.googleapis.com/css?family=Lobster+Two:700' rel='stylesheet' type='text/css'>

<link rel="stylesheet" type="text/css" href="photos.css" />
<link rel="stylesheet" type="text/css" href="resources/UberGallery.css" />
<link rel="stylesheet" type="text/css" href="resources/colorbox/5/colorbox.css" />

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="resources/colorbox/jquery.colorbox.js"></script>

<script type="text/javascript">
$(document).ready(function(){
    $("a[rel='colorbox']").colorbox({maxWidth: "90%", maxHeight: "90%", opacity: ".5"});
});
</script>

</head>
<body>
	
	<div id="weddingBackground" class="background"></div>
	
	<?php 
		include_once('resources/UberGallery.php'); 
		// Initialize the UberGallery object
        $weddingGallery = new UberGallery();

        // Initialize the gallery array
        $weddingGalleryArray = $weddingGallery->readImageDirectory('weddingPhotos');

	?>
	
    <?php if(count($weddingGalleryArray['images'])): ?>
		<h1>Wedding Photos</h1>
		<!-- Start UberGallery v<?php echo UberGallery::VERSION; ?> - Copyright (c) <?php echo date('Y'); ?> Chris Kankiewicz (http://www.ChrisKankiewicz.com) -->
		<div id="galleryWrapper">
	         <?php if($weddingGallery->getSystemMessages()): ?>
	             <ul id="systemMessages">
	                 <?php foreach($weddingGallery->getSystemMessages() as $message): ?>
	                     <li class="<?php echo $message['type']; ?>">
	                         <?php echo $message['text']; ?>
	                     </li>
	                 <?php endforeach; ?>
	             </ul>
	         <?php endif; ?>

	         <div id="galleryListWrapper">
	             <ul id="galleryList" class="clearfix">
	                 <?php foreach ($weddingGalleryArray['images'] as $image): ?>
	                     <li><a href="<?php echo $image['file_path']; ?>" title="<?php echo $image['file_title']; ?>" rel="colorbox"><img src="<?php echo $image['thumb_path']; ?>" alt="<?php echo $image['file_title']; ?>"/></a></li>
	                 <?php endforeach; ?>
	             </ul>
	         </div>
	     </div>
	     <!-- End UberGallery - Distributed under the MIT license -->
			
    <?php endif; ?>

	<h1><a href="http://weddingpartyapp.com/e/k5ca6dv">Click here to view the wedding party photos</a></h1>
	
	<!-- Start of Flickr Badge -->
	<style type="text/css">
	#flickr_badge_source_txt {padding:0; font: 11px Arial, Helvetica, Sans serif; color:#666666;}
	#flickr_badge_icon {display:block !important; margin:0 !important; border: 1px solid rgb(0, 0, 0) !important;}
	#flickr_icon_td {padding:0 5px 0 0 !important;}
	.flickr_badge_image {text-align:center !important;}
	.flickr_badge_image img {border: 1px solid black !important;}
	#flickr_www {display:block; padding:0 10px 0 10px !important; font: 11px Arial, Helvetica, Sans serif !important; color:#3993ff !important;}
	#flickr_badge_uber_wrapper a:hover,
	#flickr_badge_uber_wrapper a:link,
	#flickr_badge_uber_wrapper a:active,
	#flickr_badge_uber_wrapper a:visited {text-decoration:none !important; background:inherit !important;color:#3993ff;}
	#flickr_badge_wrapper {background-color:#ffffff;border: solid 1px #000000}
	#flickr_badge_source {padding:0 !important; font: 11px Arial, Helvetica, Sans serif !important; color:#666666 !important;}
	</style>
	<table id="flickr_badge_uber_wrapper" cellpadding="0" cellspacing="10" border="0"><tr><td><a href="http://www.flickr.com" id="flickr_www">www.<strong style="color:#3993ff">flick<span style="color:#ff1c92">r</span></strong>.com</a><table cellpadding="0" cellspacing="10" border="0" id="flickr_badge_wrapper">
	<tr>
	<script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=5&display=latest&size=t&layout=h&source=user_tag&user=97769858%40N00&tag=FarkciscoWedding"></script>
	</tr>
	</table>
	</td></tr></table>
	<!-- End of Flickr Badge -->
	
	<h1>Engagement Photos</h1>
	<?php 
		include_once('resources/UberGallery.php'); 
		// Initialize the UberGallery object
        $gallery = new UberGallery();

        // Initialize the gallery array
        $galleryArray = $gallery->readImageDirectory('engagementPhotos');
	?>
	<!-- Start UberGallery v<?php echo UberGallery::VERSION; ?> - Copyright (c) <?php echo date('Y'); ?> Chris Kankiewicz (http://www.ChrisKankiewicz.com) -->
	<div id="galleryWrapper">
         <?php if($gallery->getSystemMessages()): ?>
             <ul id="systemMessages">
                 <?php foreach($gallery->getSystemMessages() as $message): ?>
                     <li class="<?php echo $message['type']; ?>">
                         <?php echo $message['text']; ?>
                     </li>
                 <?php endforeach; ?>
             </ul>
         <?php endif; ?>

         <div id="galleryListWrapper">
             <ul id="galleryList" class="clearfix">
                 <?php foreach ($galleryArray['images'] as $image): ?>
                     <li><a href="<?php echo $image['file_path']; ?>" title="<?php echo $image['file_title']; ?>" rel="colorbox"><img src="<?php echo $image['thumb_path']; ?>" alt="<?php echo $image['file_title']; ?>"/></a></li>
                 <?php endforeach; ?>
             </ul>
         </div>
     </div>
     <!-- End UberGallery - Distributed under the MIT license -->
	
</body>
</html>
