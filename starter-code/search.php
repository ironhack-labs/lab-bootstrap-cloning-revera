<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package web2feel
 */

get_header(); ?>

<div class="page-head">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h3> <?php printf( __( 'You searched for: %s', 'web2feel' ), '<span>' . get_search_query() . '</span>' ); ?> </h3>
				<p> Search results </p>
			</div>
			
		</div>
	</div>
</div>

<div class="container">	
	<div class="row">
	<section id="primary" class="content-area col-sm-8">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'search' ); ?>

			<?php endwhile; ?>

			<?php web2feel_content_nav( 'nav-below' ); ?>

		<?php else : ?>

			<?php get_template_part( 'no-results', 'search' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_sidebar(); ?>
	</div>
</div>
<?php get_footer(); ?>