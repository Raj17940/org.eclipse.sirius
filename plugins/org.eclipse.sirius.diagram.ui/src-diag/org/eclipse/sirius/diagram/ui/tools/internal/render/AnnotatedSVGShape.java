/*******************************************************************************
 * Copyright (c) 2019 Obeo.
 * This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License 2.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/

package org.eclipse.sirius.diagram.ui.tools.internal.render;

import java.awt.Shape;

import org.apache.batik.svggen.SVGGeneratorContext;
import org.apache.batik.svggen.SVGShape;
import org.w3c.dom.Element;

// CHECKSTYLE:OFF
public class AnnotatedSVGShape extends SVGShape {
    public static final String ATTR_NAME = "semanticTargetId"; //$NON-NLS-1$

    private final String nsURI;
    private String currentId;

    public AnnotatedSVGShape(SVGGeneratorContext generatorContext, String nsURI) {
        super(generatorContext);
        this.nsURI = nsURI;
    }
    
    public void setCurrentSemanticElement(String id) {
        this.currentId = id;
    }
    
    @Override
    public Element toSVG(Shape shape) {
        Element elt = super.toSVG(shape);
        elt.setAttributeNS(nsURI, ATTR_NAME, currentId);
        return elt;
    }
}
