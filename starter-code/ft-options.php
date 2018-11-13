<?php
function FT_OP_update()
{
	$settings = get_option('ft_op');
	$settings['id'] = 'ft_' . FT_scope::tool()->optionsName;
	update_option('ft_op', $settings);
}

function FT_OP_options()
{
	
	// Test data
	$test_array = array("1" => "Tutorials","2" => "Posts");
	
	// Multicheck Array
	$multicheck_array = array("one" => "French Toast", "two" => "Pancake", "three" => "Omelette", "four" => "Crepe", "five" => "Waffle");
	
	// Multicheck Defaults
	$multicheck_defaults = array("one" => "1","five" => "1");
	
	// Background Defaults
	
	$background_defaults = array('color' => '', 'image' => '', 'repeat' => 'repeat','position' => 'top center','attachment'=>'scroll');
	
	$glyphicons = array();
	
	
	// Pull all the categories into an array
	$options_categories = array();  
	$options_categories_obj = get_categories();
	foreach ($options_categories_obj as $category) {
    	$options_categories[$category->cat_ID] = $category->cat_name;
	}
	
	// Pull all the pages into an array
	$options_pages = array();  
	$options_pages_obj = get_pages('sort_column=post_parent,menu_order');
	$options_pages[''] = 'Select a page:';
	foreach ($options_pages_obj as $page) {
    	$options_pages[$page->ID] = $page->post_title;
	}
	
		// Pull all the pages into an array
	$options_slider = array();  
	$options_slider_obj = get_posts('post_type=custom_slider');
	$options_slider[''] = 'Select a slider:';
	foreach ($options_slider_obj as $post) {
    	$options_slider[$post->ID] = $post->post_title;
	}
		
	// If using image radio buttons, define a directory path
	$imagepath =  get_bloginfo('stylesheet_directory') . '/images/';
		
	$options = array();
	
	
	$options[] = array( "name" => "Homepage",
						"type" => "heading");	
						
						
	$options[] = array( "name" => "Slider Category",
						"desc" => "Select a category for the image slider",
						"id" => "fabthemes_slide_categories",
						"type" => "select",
						"options" => $options_categories);						
						
	$options[] = array( "name" => "Number of slides",
						"desc" => "Enter the number of slides",
						"id" => "fabthemes_slide_number",
						"std" => "",
						"type" => "text");							
										
	$options[] = array( "name" => "Portfolio Category",
						"desc" => "Select a category for the portfolio items",
						"id" => "fabthemes_portfolio",
						"type" => "select",
						"options" => $options_categories);						
						
	$options[] = array( "name" => "Portfolio items per page",
						"desc" => "Enter the number of portfolio items per page",
						"id" => "fabthemes_port_number",
						"std" => "",
						"type" => "text");							
										

	$options[] = array( "name" => "Homepage widgets",
						"type" => "heading");	
						
						
						
	$options[] = array( "name" => "Left widget title",
						"desc" => "Enter the title for left widget",
						"id" => "fabthemes_left_title",
						"std" => "Title goes here",
						"type" => "text");		
												
	$options[] = array( "name" => "Left widget text",
						"desc" => "Text for your left widget",
						"id" => "fabthemes_left_text",
						"std" => "Text goes here",
						"type" => "textarea"); 	
						
	$options[] = array( "name" => "Left widget icon",
						"desc" => "Enter the glyphicon name. Check http://glyphicons.getbootstrap.com/",
						"id" => "fabthemes_left_icon",
						"std" => "glyphicon-glass",
						"type" => "text");	
										
		

						
	$options[] = array( "name" => "Middle widget title",
						"desc" => "Enter the title for middle widget",
						"id" => "fabthemes_middle_title",
						"std" => "Title goes here",
						"type" => "text");
						
	$options[] = array( "name" => "Middle widget text",
						"desc" => "Text for your middle widget",
						"id" => "fabthemes_middle_text",
						"std" => "Text goes here",
						"type" => "textarea"); 	
						
	$options[] = array( "name" => "Middle widget icon",
						"desc" => "Enter the glyphicon name. Check http://glyphicons.getbootstrap.com/",
						"id" => "fabthemes_middle_icon",
						"std" => "glyphicon-star",
						"type" => "text");	
										
						
						
						
	$options[] = array( "name" => "Right widget title",
						"desc" => "Enter the title for right widget",
						"id" => "fabthemes_right_title",
						"std" => "Title goes here",
						"type" => "text");
												
	$options[] = array( "name" => "Right widget text",
						"desc" => "Text for your right widget",
						"id" => "fabthemes_right_text",
						"std" => "Text goes here",
						"type" => "textarea"); 	
						
	$options[] = array( "name" => "Right widget icon",
						"desc" => "Enter the glyphicon name. Check http://glyphicons.getbootstrap.com/",
						"id" => "fabthemes_right_icon",
						"std" => "glyphicon-heart",
						"type" => "text");	
						
						
						
					

	if (file_exists(dirname(__FILE__) . '/FT/options/banners.php'))
			include ('FT/options/banners.php');

	if (file_exists(dirname(__FILE__) . '/FT/options/colors.php'))
			include ('FT/options/colors.php');

	if (file_exists(dirname(__FILE__) . '/FT/options/common.php'))
			include ('FT/options/common.php');

	return $options;
}