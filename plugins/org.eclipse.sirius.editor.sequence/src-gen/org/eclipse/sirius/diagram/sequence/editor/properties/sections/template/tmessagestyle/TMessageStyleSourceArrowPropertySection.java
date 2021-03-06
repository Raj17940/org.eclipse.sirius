/*******************************************************************************
 * Copyright (c) 2007, 2018 THALES GLOBAL SERVICES.
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
package org.eclipse.sirius.diagram.sequence.editor.properties.sections.template.tmessagestyle;

// Start of user code imports

import java.util.ArrayList;
import java.util.List;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.sirius.diagram.EdgeArrows;
import org.eclipse.sirius.diagram.sequence.template.TemplatePackage;
import org.eclipse.sirius.editor.editorPlugin.SiriusEditor;
import org.eclipse.sirius.editor.properties.sections.common.AbstractTablePropertySection;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.views.properties.tabbed.TabbedPropertySheetPage;

// End of user code imports

/**
 * A section for the sourceArrow property of a TMessageStyle object.
 */
public class TMessageStyleSourceArrowPropertySection extends AbstractTablePropertySection {
    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#getDefaultLabelText()
     */
    @Override
    protected String getDefaultLabelText() {
        return "SourceArrow"; //$NON-NLS-1$
    }

    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#getLabelText()
     */
    @Override
    protected String getLabelText() {
        String labelText;
        labelText = super.getLabelText() + "*:"; //$NON-NLS-1$
        // Start of user code get label text

        // End of user code get label text
        return labelText;
    }

    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#getFeature()
     */
    @Override
    protected EAttribute getFeature() {
        return TemplatePackage.eINSTANCE.getTMessageStyle_SourceArrow();
    }

    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#getFeatureValue(int)
     */
    @Override
    protected Object getFeatureValue(int index) {
        return ((ImageItem) getChoiceOfValues().get(index)).getEnum();
    }

    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#isEqual(int)
     */
    @Override
    protected boolean isEqual(int index) {
        return ((ImageItem) getChoiceOfValues().get(index)).getEnum().equals(eObject.eGet(getFeature()));
    }

    /**
     * @see org.eclipse.sirius.diagram.sequence.editor.properties.sections.AbstractTablePropertySection#getEnumerationFeatureValues()
     */
    @Override
    protected List<?> getChoiceOfValues() {
        List<ImageItem> result = new ArrayList<>();
        for (EdgeArrows edgeArrows : EdgeArrows.VALUES) {
            if (edgeArrows.equals(EdgeArrows.NO_DECORATION_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/noDecoration.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.OUTPUT_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/outputArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.INPUT_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/inputArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.OUTPUT_CLOSED_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/outputClosedArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.INPUT_CLOSED_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/inputClosedArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.OUTPUT_FILL_CLOSED_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/outputFillClosedArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.INPUT_FILL_CLOSED_ARROW_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/inputFillClosedArrow.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.DIAMOND_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/diamond.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.FILL_DIAMOND_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/fillDiamond.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.INPUT_ARROW_WITH_DIAMOND_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/inputArrowWithDiamond.gif"));
            }
            if (edgeArrows.equals(EdgeArrows.INPUT_ARROW_WITH_FILL_DIAMOND_LITERAL)) {
                result.add(new ImageItem(edgeArrows, "icons/full/decorator/inputArrowWithFillDiamond.gif"));
            }
        }
        return result;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void createControls(Composite parent, TabbedPropertySheetPage tabbedPropertySheetPage) {
        super.createControls(parent, tabbedPropertySheetPage);

        nameLabel.setFont(SiriusEditor.getFontRegistry().get("required"));

    }
}
