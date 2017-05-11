build:
	@gulp sass

deploy: build
	rsync -avze 'ssh -p 22' --delete app/ root@192.168.1.215:/usr/local/app/apache/htdocs/trust-std-web

.PHONY: build deploy
