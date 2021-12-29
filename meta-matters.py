# All requests should be proxied through this flask server to dynamically replace OpenGraph Metadata.

import os
from typing import Any, Union
from flask import Flask, send_from_directory, send_file
import json
from werkzeug.exceptions import NotFound

app = Flask(__name__)


@app.route('/')
@app.route('/<path:path>')
def onPath(path: str = '') -> Any:
    print('PATH', path)
    distDir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'dist')
    staticDir = os.path.join(os.path.dirname(
        os.path.realpath(__file__)), 'static')

    try:
        if path == '/':
            return send_file(distDir, 'index.html')
        return send_from_directory(distDir, path)
    except NotFound:
        # This is only possible for routes that are defined within the PWA but not as a real file.
        try:
            with open(os.path.join(distDir, "index.html")) as f:
                content = f.read().split('<replace-meta></replace-meta>')
                meta = getMeta(path)
                print(len(content), meta)
                if len(content) == 3 and meta:
                    content[1] = meta
                    # Preserves <replace-meta> in case if it's a text within the html.
                return '<replace-meta></replace-meta>'.join(content)
        except FileNotFoundError:
            try:
                with open(os.path.join(staticDir, 'building.html')) as f:
                    return f.read()
            except FileNotFoundError:
                return '''<p>Something went wrong. Please try again in a few minutes or contact us on <a href="mailto:lincoln@yyjlincoln.com">lincoln@yyjlincoln.com</a></p>'''
        except Exception:
            # Don't care about meta.
            return send_file(distDir, 'index.html')


def getMeta(path: str) -> Union[str, None]:
    newline = '\n'
    path = path.lower()
    # Remove the last '/'
    if path.endswith('/'):
        path = path[:-1]

    send_meta = ''
    metadata = None

    if path in Meta:
        metadata = Meta[path]
    else:
        product = getProduct('/' + path)
        if product:
            metadata = {
                'og:title': f'''yyjlincoln > {product['category']} > {product['name']}''',
                'og:url': '''https://yyjlincoln.com''' + product['link'],
                'og:image': f'''{product['image']}''',
                'og:description': f'''{newline.join(product['description'])}''',
                'description': f'''{newline.join(product['description'])}''',
            }
    if metadata:
        for property in metadata:
            send_meta += f'''<meta property="{property}" content="{metadata[property]}"/>'''
            return send_meta
    else:
        return None


def getProduct(route) -> dict:
    srcDir = os.path.join(os.path.dirname(
        os.path.realpath(__file__)), 'src')
    try:
        with open(os.path.join(srcDir, 'product-data.json')) as f:
            allProducts = json.load(f)
            for category, product in allProducts.items():
                for productName, productData in product.items():
                    if route.lower() in productData['routes']:
                        return {
                            **productData,
                            'category': category
                        }
            return None
    except Exception:
        return None


Meta: dict = {
    'portfolio': {
        'og:title': '''My Portfolio''',
        'og:url': '''https://yyjlincoln.com/portfolio''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''A list of Lincoln's projects. @yyjlincoln''',
        'description': '''A list of Lincoln's projects. @yyjlincoln''',
    },
    'curriculum-vitae': {
        'og:title': '''Lincoln's Curriculum Vitae''',
        'og:url': '''https://yyjlincoln.com/curriculum-vitae''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''Find out more about me. @yyjlincoln''',
        'description': '''Find out more about me and my projects. @yyjlincoln''',
    },
    'connect': {
        'og:title': '''Connect with me''',
        'og:url': '''https://yyjlincoln.com/connect''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''Connect with me via GitHub, Linkedin or more. @yyjlincoln''',
        'description': '''Connect with me via GitHub, Linkedin or more. @yyjlincoln''',
    },
    'jounrey': {
        'og:title': '''My Coding Journey''',
        'og:url': '''https://yyjlincoln.com/journey''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''Know more about how I started coding.''',
        'description': '''Know more about how I started coding.''',
    },
    'acknowledgements': {
        'og:title': '''Open-Source Software Acknowledgements''',
        'og:url': '''https://yyjlincoln.com/acknowledgements''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''This website was designed with ❤️ and with the help of open-source modules & GSAP.''',
        'description': '''This website was designed with ❤️ and with the help of open-source modules & GSAP.''',
    },
    'scholarship': {
        'og:title': '''Scholarship Information''',
        'og:url': '''https://yyjlincoln.com/scholarship''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''Additional Information & Supporting Evidence for the Scholarship Application.''',
        'description': '''Additional Information & Supporting Evidence for the Scholarship Application.''',
    },
}
