<?php
/**
 * @package web2feel
 */
?>

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php if ( 'post' == get_post_type() ) : ?>
					<div class="entry-meta">
						<?php web2feel_posted_on(); ?>
					</div><!-- .entry-meta -->
					<?php endif; ?>
					<h1 class="entry-title"><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
				</header><!-- .entry-header -->
			
					
				<?php
					$thumb = get_post_thumbnail_id();
					$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
					$image = aq_resize( $img_url, 780, 400, true ); //resize & crop the image
				?>
							
				<?php if($image) : ?>
				<img class="img-responsive" src="<?php echo $image ?>"/>
				<?php endif; ?>				
				
				
				<div class="entry-summary">
					<?php the_excerpt(); ?>
				</div><!-- .entry-summary -->
							
				<footer class="entry-meta">
					<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
						<?php
							/* translators: used between list items, there is a space after the comma */
							$categories_list = get_the_category_list( __( ', ', 'web2feel' ) );
							if ( $categories_list && web2feel_categorized_blog() ) :
						?>
						<span class="cat-links">
							<?php printf( __( 'Posted in %1$s', 'web2feel' ), $categories_list ); ?>
						</span>
						<?php endif; // End if categories ?>
			
						<?php
							/* translators: used between list items, there is a space after the comma */
							$tags_list = get_the_tag_list( '', __( ', ', 'web2feel' ) );
							if ( $tags_list ) :
						?>
						<span class="tags-links">
							<?php printf( __( 'Tagged %1$s', 'web2feel' ), $tags_list ); ?>
						</span>
						<?php endif; // End if $tags_list ?>
					<?php endif; // End if 'post' == get_post_type() ?>
			
					<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
					<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'web2feel' ), __( '1 Comment', 'web2feel' ), __( '% Comments', 'web2feel' ) ); ?></span>
					<?php endif; ?>
			
					<?php edit_post_link( __( 'Edit', 'web2feel' ), '<span class="edit-link">', '</span>' ); ?>
				</footer><!-- .entry-meta -->
			</article><!-- #post-## -->

