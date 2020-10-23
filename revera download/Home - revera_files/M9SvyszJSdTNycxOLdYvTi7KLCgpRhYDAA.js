var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($){$('.zilla-likes').live('click',function(){var link=$(this);if(link.hasClass('active'))return false;var id=$(this).attr('id'),postfix=link.find('.zilla-likes-postfix').text();$.post(zilla_likes.ajaxurl,{action:'zilla-likes',likes_id:id,postfix:postfix},function(data){link.html(data).addClass('active').attr('title','You already like this');});return false;});if($('body.ajax-zilla-likes').length){$('.zilla-likes').each(function(){var id=$(this).attr('id');$(this).load(zilla_likes.ajaxurl,{action:'zilla-likes',post_id:id});});}});

}
/*
     FILE ARCHIVED ON 10:00:48 Jan 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:29:40 Oct 22, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.148
  captures_list: 291.113
  exclusion.robots: 0.158
  PetaboxLoader3.resolve: 2244.3 (2)
  LoadShardBlock: 227.025 (3)
  load_resource: 2802.153 (2)
  esindex: 0.008
  CDXLines.iter: 15.66 (3)
  RedisCDXSource: 45.504
  PetaboxLoader3.datanode: 638.006 (5)
*/