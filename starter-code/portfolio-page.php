<?php
/**
 * The template for displaying all pages.
 *
  Template name:Portfolio
  
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package web2feel
 */

get_header(); ?>
<div class="page-head">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h3> Portfolio </h3>
				<p> The portfolio archive </p>
			</div>
			
		</div>
	</div>
</div>

<div class="container">	
	<div class="row">
	
		<div id="primary">
		<?php
		$port_count = ft_of_get_option('fabthemes_port_number');
		$port_cat =ft_of_get_option('fabthemes_portfolio');
		
		if ( get_query_var('paged') )
		    $paged = get_query_var('paged');
		elseif ( get_query_var('page') )
		    $paged = get_query_var('page');
		else
		    $paged = 1;
		$wp_query = new WP_Query(array('cat' => $port_cat, 'posts_per_page' => $port_count, 'paged' => $paged ));
		?>
		<?php while ($wp_query->have_posts()) : $wp_query->the_post(); ?>
		
		 <article class="col-sm-3 col-6 portbox post">
					
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
		 
		 </article>
			

				<?php endwhile; ?>
</div>



	</div>
</div>

<?php get_footer(); ?>
