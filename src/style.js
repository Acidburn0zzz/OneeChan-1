<%= grunt.file.read('src/css/Cleanup.css') %>
<%= grunt.file.read('src/css/Original.css') %>
<%= grunt.file.read('src/css/General.css') %>
<%= grunt.file.read('src/css/Fonts.css') %>
<%= grunt.file.read('src/css/Colors.css') %>
" + ($SS.conf["Sidebar Position"] !== 3 ? "<%= grunt.file.read('src/css/Sidebar.css') %>" : "") + "
<%= grunt.file.read('src/css/Icons.css') %>
<%= grunt.file.read('src/css/Highlight.css') %>
<%= grunt.file.read('src/css/Options.css') %>
" + ($SS.conf["Version Fix"] == 2 ? "<%= grunt.file.read('src/forks/MayhemYDG.css') %>" : "") + "
" + ($SS.conf["Version Fix"] == 3 ? "<%= grunt.file.read('src/forks/loadletter.css') %>" : "") + "
" + $SS.theme.customCSS + "