<div id="slidebox" class="flexslider">

		<ul class="slides">
		    <?php 	$count = ft_of_get_option('fabthemes_slide_number');
					$slidecat =ft_of_get_option('fabthemes_slide_categories');
					
					$query = new WP_Query( array( 'cat' =>$slidecat,'posts_per_page' =>$count ) );
		           	if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();	?>
		 	
			 		<li>
			 			
					<?php
						$thumb = get_post_thumbnail_id();
						$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
						$image = aq_resize( $img_url, 1200, 550, true ); //resize & crop the image
					?>
					
					<?php if($image) : ?>
						<a href="<?php the_permalink(); ?>"><img class="grayscale"  src="<?php echo $image ?>"/></a>
					<?php endif; ?>
	
					<div class="flex-caption">
						<h2><?php the_title(); ?></h2>
						<?php the_excerpt(); ?>
						<a class="frmore" href="<?php the_permalink(); ?>"> READ MORE </a>
					</div>
			<?php endwhile; endif; ?>
					    		
		  </li>
		</ul>
<div class="doverlay"></div>
</div>

<div class="fwidgets">
	<div class="container">
		<div class="row">
			
			<div class="col-sm-4 homewidget">
				
				<span><i class="glyphicon <?php echo ft_of_get_option('fabthemes_left_icon'); ?>"></i></span>
				<h3> <?php echo ft_of_get_option('fabthemes_left_title'); ?></h3>
				<p> <?php echo ft_of_get_option('fabthemes_left_text'); ?> </p>
			</div>	
			
			<div class="col-sm-4 homewidget">
				<span><i class="glyphicon <?php echo ft_of_get_option('fabthemes_middle_icon'); ?>"></i></span>
				<h3>  <?php echo ft_of_get_option('fabthemes_middle_title'); ?></h3>
				<p> <?php echo ft_of_get_option('fabthemes_middle_text'); ?> </p>
			</div>	
			
			<div class="col-sm-4 homewidget">
				<span><i class="glyphicon <?php echo ft_of_get_option('fabthemes_right_icon'); ?>"></i></span>
				<h3> <?php echo ft_of_get_option('fabthemes_right_title'); ?></h3>
				<p> <?php echo ft_of_get_option('fabthemes_right_text'); ?> </p>
			</div>	
			
		</div>
	</div>
</div>