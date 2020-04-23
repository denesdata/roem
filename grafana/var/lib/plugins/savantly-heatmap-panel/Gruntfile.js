module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({

    clean: ['dist'],

    copy: {
      src_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['**/*', '!**/*.js', '!**/*.scss', '!img/**/*'],
        dest: 'dist'
      },
      libs_to_dist: {
		  cwd: 'bower_components',
		  expand: true,
		  src: ['d3/d3.js',
		        'd3/d3.min.js',
		        'd3plus/d3plus*js'],
		  dest: 'dist/libs'
		},
      readme: {
        expand: true,
        src: ['README.md'],
        dest: 'dist',
      },
      img_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['img/**/*'],
        dest: 'dist/'
      },
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*', 'README.md'],
        tasks: ['default'],
        options: {spawn: false}
      },
    },
    
    sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'dist/css/heatmap.css': 'src/css/heatmap.scss'
			}
		}
	},

    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: ['transform-es2015-modules-systemjs', 'transform-es2015-for-of'],
      },
      dist: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['*.js'],
          dest: 'dist',
          ext: '.js'
        }]
      },
    },

  });

  grunt.registerTask('default', ['clean', 'copy:src_to_dist', 'copy:libs_to_dist', 'copy:readme', 'copy:img_to_dist', 'sass', 'babel']);
};
