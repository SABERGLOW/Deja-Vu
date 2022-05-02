'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/Deja-Vu.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' : 'data-target="#xs-components-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' :
                                            'id="xs-components-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IdentifyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IdentifyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RectangleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RectangleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' : 'data-target="#xs-injectables-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' :
                                        'id="xs-injectables-links-module-AppModule-16a7976f0b0a0e296bee82260048bff8b361afbce5583c4cca680c989c710efc7d4eacac7389891814bcb96d841926a0206a6dfe618a9bf94e3104166d68a05a"' }>
                                        <li class="link">
                                            <a href="injectables/AzureFaceApiDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AzureFaceApiDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AzureFaceApiDataService.html" data-type="entity-link" >AzureFaceApiDataService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});