#Upload Process

create build by using these command

for windos : $env:PUBLIC_URL="https://widget-test.tagshop.ai/widget"; $env:GENERATE_SOURCEMAP="false"; npm run build
for mac : PUBLIC_URL="https://widget-test.tagshop.ai/widget" GENERATE_SOURCEMAP="false" npm run build

copy build folder and replace with widget folder's files
copy index.html and put in root folder widget-test.tagshop.ai
update embed.json css js urls
past id="taggShopRoot" in index.html

