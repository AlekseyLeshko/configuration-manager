all: install_dependencies test build

install_dependencies: install_global_module
	npm install

install_say_me:
	npm install -g say-me

install_global_module: install_say_me
	$(eval GULP_IS_INSTALLED = $(shell say-me --npmmii -g -p gulp))

	@if [ "$(GULP_IS_INSTALLED)" = "false" ] ; then \
		echo "installing gulp"; \
		npm install -g gulp; \
	fi

	@echo "gulp is installed"

test:
	npm test

build: local_install

local_install:
	npm install -g ./

clean:
	rm -rf node_modules/
	rm -rf .coverdata/
	rm -rf debug/
	rm .coverrun
	rm coverage.html

drop:
	npm remove -g say-me
