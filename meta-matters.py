# All requests should be proxied through this flask server to dynamically replace OpenGraph Metadata.

from typing import Any, Union
from flask import Flask, send_from_directory, send_file, render_template
import os
from werkzeug.exceptions import NotFound
app = Flask(__name__)

@app.route('/')
@app.route('/<path:path>')
def onPath(path: str = '') -> Any:
    print('PATH', path)
    distDir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'dist')
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

        except:
            return 'NOT FOUND. We might be building the latest version of the page - please refresh the page in around a minute.'


def getMeta(path: str) -> Union[str, None]:
    path = path.lower()
    # Remove the last '/'
    if path.endswith('/'):
        path = path[:-1]

    send_meta = ''
    if path in Meta:
        for property in Meta[path]:
            send_meta += f'''<meta property="{property}" content="{Meta[path][property]}"/>'''
        return send_meta
    else:
        return None


Meta: dict = {
    'portfolio': {
        'og:title': '''My Portfolio''',
        'og:url': '''https://yyjlincoln.com/portfolio''',
        'og:image': '''https://yyjlincoln.com/logo.png''',
        'og:description': '''A list of Lincoln's projects. @yyjlincoln''',
        'description': '''A list of Lincoln's projects. @yyjlincoln''',
    },
    'portfolio/wishes': {
        'og:title': '''Lincoln's Portfolio > COVID Wishes''',
        'og:url': '''https://yyjlincoln.com/portfolio/wishes''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/covidwishes-logo.png''',
        'og:description': '''Make a wish & Get it emailed to you when COVID is over. Or simply write something to your future self. Coming early 2022.''',
        'description': '''Make a wish & Get it emailed to you when COVID is over. Or simply write something to your future self. Coming early 2022.''',
    },
    'portfolio/documentx': {
        'og:title': '''Lincoln's Portfolio > DocumentX''',
        'og:url': '''https://yyjlincoln.com/portfolio/documentx''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/documentx-logo.png''',
        'og:description': '''A document management system.''',
        'description': '''A document management system.''',
    },
    'portfolio/documentx-ios': {
        'og:title': '''Lincoln's Portfolio > DocumentX for Apple Platforms''',
        'og:url': '''https://yyjlincoln.com/portfolio/documentx-ios''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/documentx-ios-logo.png''',
        'og:description': '''Manage your document on the move. Securely distribute App-Only documents.''',
        'description': '''Manage your document on the move. Securely distribute App-Only documents.''',
    },
    'portfolio/nowaskme': {
        'og:title': '''Lincoln's Portfolio > Nowask.me''',
        'og:url': '''https://yyjlincoln.com/portfolio/nowaskme''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/nam-logo.png''',
        'og:description': '''Anonymous Q&A Platform''',
        'description': '''Anonymous Q&A Platform''',
    },
    'portfolio/yyjlincoln': {
        'og:title': '''Lincoln's Portfolio > About this site''',
        'og:url': '''https://yyjlincoln.com/portfolio/yyjlincoln''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/yyjlincoln-logo.png''',
        'og:description': '''About this site''',
        'description': '''About this site''',
    },
    'portfolio/khhs-psn': {
        'og:title': '''Lincoln's Portfolio > PushNotification''',
        'og:url': '''https://yyjlincoln.com/portfolio/khhs-psn''',
        'og:image': '''https://static.yyjlincoln.com/yyjlincoln/khhspsn-logo.png''',
        'og:description': '''A smart notice board system for school TVs.''',
        'description': '''A smart notice board system for school TVs.''',
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
