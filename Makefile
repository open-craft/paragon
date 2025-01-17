build:
	rm -rf ./dist
	./node_modules/.bin/babel src --out-dir dist --source-maps --ignore **/*.test.jsx,**/*.stories.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/*.stories.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	node build-scss.js
