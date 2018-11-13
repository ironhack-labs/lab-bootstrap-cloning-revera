<?php
/**
 * Template name:Homepage
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package web2feel
 */

get_header(); ?>

<div class="container">


<div class="section-wide">
	<div class="row">
	<div class="section-title col-12">
		<h2> Latest Projects</h2>
		<p>Few of the latest portfolio items </p>
	</div>
	
	<div class="boxitems">
	
		
		 <?php 	
		 $portcat =ft_of_get_option('fabthemes_portfolio');
		 $query = new WP_Query( array( 'cat' =>$portcat,'posts_per_page' =>4 ) );
		 if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();	?>
		 	
		 <div class="col-sm-3 col-6 portbox">
					
		 <?php
			$thumb = get_post_thumbnail_id();
			$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
			$image = aq_resize( $img_url, 750, 500, true ); //resize & crop the image
		 ?>
					
		 <?php if($image) : ?>
			<div class="hthumb">
			 
			 	<a href="<?php the_permalink(); ?>"><img class="img-responsive" src="<?php echo $image ?>"/></a>
		 	</div>
		 <?php endif; ?>

		 <h3><a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a></h3>
		 
		 </div>
		
		 <?php endwhile; endif; ?>
		 
	</div>
	
	</div>
</div>

<div class="section-wide sec">
	<div class="row">
	<div class="section-title col-12">
		<h2> Latest Articles</h2>
		<p>Latest posts from the blog </p>
	</div>
	
	<div class="boxitems">
		 <?php 	
		 $port_cat =ft_of_get_option('fabthemes_portfolio');
		 $query = new WP_Query( array( 'cat' => -$port_cat,'posts_per_page' =>4 ) );
		 if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();	?>
		 	
		 <div class="col-sm-3 col-6 postbox">
		 			
		 <?php
			$thumb = get_post_thumbnail_id();
			$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
			$image = aq_resize( $img_url, 750, 500, true ); //resize & crop the image
		 ?>
					
		 <?php if($image) : ?>
		 	<div class="hthumb">
		 	
			 	<a href="<?php the_permalink(); ?>"><img class="img-responsive" src="<?php echo $image ?>"/></a>
		 	</div>
			
		 <?php endif; ?>

		 <h3><a href="<?php the_permalink(); ?>"> <?php the_title(); ?></a></h3>
		 <div class="hometa"> <?php web2feel_posted_on(); ?> </div>
		 
		
		  <?php the_excerpt(); ?>
		 </div>
		
		 <?php endwhile; endif; ?>
		 
	</div>
	
	</div>
</div>

</div>

<?php get_footer(); ?>
