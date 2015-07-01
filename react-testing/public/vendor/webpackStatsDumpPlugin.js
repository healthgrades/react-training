var fs = require('fs'),
	_ = require('lodash');

var statsDump = function () {
	var statsPath = "./public/bundles/stats.js";

	this.plugin("compile", function() {
		if (fs.existsSync(statsPath)) {
			var statsStream = fs.readFileSync(statsPath, "utf8");
			var stats = JSON.parse(statsStream);

			function isActiveFile(file) {
				if (file === "stats.json") {
					console.log("Skip stats.json");
					return true;
				}

				for (var fileBlock in stats) {
					var validFile = stats[fileBlock][0];
					var validMap = stats[fileBlock][1];

					if (file === validFile || file === validMap) {
						return true;
					}
				}
				return false;
			}

			// delete existing files in bundles folder before creating new ones
			fs.readdir("./public/bundles/", function(err, files) {
				for (var i = 0; i < files.length; i++) {
					if (files[i] === 'hot.js' || isActiveFile(files[i])) continue;
					fs.unlinkSync("./public/bundles/" + files[i]);
				}
			});
		}
	});

	this.plugin("done", function (stats) {
		var assets = stats.toJson().assetsByChunkName,
			flattenedAssets = {};

		var normalizeValueToArray = function (value, key) {
			if (_.isArray(value)) {
				return value;
			} else {
				return [value];
			}
		};

		var makeBundleObj = function (fileName) {
			var nameSplits = fileName.split('.'),
				key = _.first(nameSplits) + _.last(nameSplits);

			return [key, fileName];
		};

		flattenedAssets = _(assets)
			.map(normalizeValueToArray)
			.flatten()
			.filter(function(fileName) {
				return fileName.indexOf('.map') === -1;
			})
			.map(makeBundleObj)
			.reduce(function (acc, arr) {
				acc[arr[0]] = arr[1];
				return acc;
			}, {});

		fs.writeFileSync(
			statsPath,
			JSON.stringify(flattenedAssets, 0, '\t'));
	});
};

module.exports = statsDump;