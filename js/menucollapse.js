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

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
             $("button.navbar-toggle").click();
        }
    });
});

}
/*
     FILE ARCHIVED ON 03:48:10 Nov 10, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:06:16 Nov 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 88.988
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.092
  RedisCDXSource: 2.309
  esindex: 0.01
  LoadShardBlock: 67.616 (3)
  PetaboxLoader3.datanode: 89.444 (4)
  CDXLines.iter: 16.338 (3)
  load_resource: 142.212
  PetaboxLoader3.resolve: 98.52
*/