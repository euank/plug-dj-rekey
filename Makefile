.PHONY: release

VERSION=$(shell jq -r '.version' manifest.json)

release:
	zip -r plug-dj-rekey-v$(VERSION).zip ./LICENSE ./README.md ./background.js ./manifest.json ./options.html ./options.js
