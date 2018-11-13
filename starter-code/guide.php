<?php
function theme_guide(){
add_theme_page( 'Theme guide','Theme documentation','edit_themes', 'theme-documentation', 'fabthemes_theme_guide');
}
add_action('admin_menu', 'theme_guide');

function fabthemes_theme_guide(){
		echo '
		
<div id="welcome-panel" class="about-wrap">

	<div class="wpbadge" style="float:left; margin-right:30px; "><img src="'. get_template_directory_uri() . '/screenshot.png" width="250" height="200" /></div>

	<div class="welcome-panel-content">
	
	<h1>Welcome to '.wp_get_theme().' WordPress theme!</h1>
	
	<p class="about-text"> '.wp_get_theme().' is a free premium WordPress theme. This is a WordPress 3+ ready theme built on the bootstrap 3 framework. The theme comes with features like custom menu, featured images, widgetized sidebar, custom homepage etc. Theme also comes with an option panel. The homepage of the theme has a customizable Flexslider, custom widget areas and portfolio section.  </p>
	
	
		

		<div class="changelog ">
		<h3>Required plugins </h3>
		<p>The theme often requires few plugins to work the way it is originally intented to. You will find a notification on the admin panel prompting you to install the required plugins. Please install and activate the plugins.  </p>
		<ol>
			<li><a href="http://wordpress.org/extend/plugins/options-framework/">Options framework</a></li>
		</ol>
		</div>
	
	
		<div class="changelog">
		<h3>Custom Homepage</h3>
		<p> This theme comes with a custom homepage template. To enable the custom homepage template please follow the steps below</p>
		
		<ul>
			<li>Go to Admin panel > Pages and create a new PAGE item, select the homepage template, and publish it. </li>
			<li>Go to Admin panel > Settings > Reading > Frontpage displays, and select " A static page" </li>
			<li>For frontpage, select the page called "home" you created earlier.</li>
			<li>For posts page select another page </li>
			
		</ul>
		
		</div>
	
	
	
		<div class="changelog ">
		
		<h3>Theme options explained</h3>
		<p>The theme contains an options page using which you adjust various settings available on the theme. </p>
		
		
		<p><b>Slider setting:</b>
		There is a jQuery slider on the homepage of the theme You can use the slider to display the featured images from a selected category. From the theme options page you can select a category and the number of slides to be displayed.</p>

		<p><b>Portfolio setting:</b>
		You can set a particular category for your portfolio items via the theme options panel. All posts added under this category will be treated as a portfolio item. </p>

		<p><b>Custom widgets on homepage:</b>
		Homepage has 3 custom widget areas. You can add title, icon and text for each widget via theme option page. </p>

		<p><b>Banner setting:</b>
		Configure the banner ads on the sidebar </p>

		</div>
	
				
		<div class="changelog ">
		' . file_get_contents(dirname(__FILE__) . '/FT/license-html.php') . '
		</div>
	

	</div>
	</div>
		
		';
		

}
