/*******************************************************************************
 * Copyright (c) 2013 THALES GLOBAL SERVICES.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
package org.eclipse.sirius.common.tools.internal.interpreter;

import java.util.Iterator;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EStructuralFeature;
import org.eclipse.sirius.common.tools.api.interpreter.EvaluationException;
import org.eclipse.sirius.common.tools.api.interpreter.IInterpreter;
import org.eclipse.sirius.common.tools.api.interpreter.IInterpreterContext;
import org.eclipse.sirius.common.tools.api.interpreter.IInterpreterProvider;
import org.eclipse.sirius.common.tools.api.interpreter.IInterpreterStatus;
import org.eclipse.sirius.common.tools.api.interpreter.InterpreterStatusFactory;
import org.eclipse.sirius.common.tools.api.interpreter.TypeName;
import org.eclipse.sirius.common.tools.api.interpreter.ValidationResult;
import org.eclipse.sirius.common.tools.api.interpreter.VariableType;

import com.google.common.collect.Iterators;
import com.google.common.collect.Lists;

/**
 * A specialized interpreter which only supports direct access to a named
 * feature (or pseudo-feature) of the context element.
 * 
 * @author pcdavid
 */
public class FeatureInterpreter extends AbstractInterpreter implements org.eclipse.sirius.common.tools.api.interpreter.IInterpreter, IInterpreterProvider {

    /** The Feature interpreter prefix. */
    public static final String PREFIX = "feature:";

    /** The eContainer feature name. */
    public static final String E_CONTAINER_FEATURE_NAME = "eContainer";

    /** The eContents feature name. */
    public static final String E_CONTENTS_FEATURE_NAME = "eContents";

    /** The eAllContents feature name. */
    public static final String E_ALL_CONTENTS_FEATURE_NAME = "eAllContents";

    /** The eClass feature name. */
    public static final String E_CLASS_FEATURE_NAME = "eClass";

    /** The eCrossReferences pseudo-feature name. */
    public static final String E_CROSS_REFERENCES_FEATURE_NAME = "eCrossReferences";

    /** The default feature names. */
    public static final String[] DEFAULT_FEATURE_NAMES = { E_CONTAINER_FEATURE_NAME, E_CONTENTS_FEATURE_NAME, E_ALL_CONTENTS_FEATURE_NAME, E_CLASS_FEATURE_NAME, E_CROSS_REFERENCES_FEATURE_NAME };

    /**
     * {@inheritDoc}
     */
    public IInterpreter createInterpreter() {
        return new FeatureInterpreter();
    }

    /**
     * {@inheritDoc}
     */
    public String getPrefix() {
        return PREFIX;
    }

    /**
     * {@inheritDoc}
     */
    public Object evaluate(EObject target, String expression) throws EvaluationException {
        Object result = null;
        if (target != null && expression != null && expression.startsWith(PREFIX)) {
            String featureName = expression.trim().substring(PREFIX.length());
            EStructuralFeature feature = target.eClass().getEStructuralFeature(featureName);
            if (feature != null) {
                result = target.eGet(feature);
            } else if (E_CONTAINER_FEATURE_NAME.equals(featureName)) {
                result = target.eContainer();
            } else if (E_CONTENTS_FEATURE_NAME.equals(featureName)) {
                result = target.eContents();
            } else if (E_ALL_CONTENTS_FEATURE_NAME.equals(featureName)) {
                result = Lists.newArrayList(target.eAllContents());
            } else if (E_CLASS_FEATURE_NAME.equals(featureName)) {
                result = target.eClass();
            } else if (E_CROSS_REFERENCES_FEATURE_NAME.equals(featureName)) {
                result = target.eCrossReferences();
            } else {
                throw new EvaluationException("Unknown feature name " + featureName + ".");
            }
        }
        return result;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean supportsValidation() {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public ValidationResult analyzeExpression(IInterpreterContext context, String expression) {
        ValidationResult interpreterStatus = new ValidationResult();
        if (expression != null && context != null && expression.startsWith(PREFIX)) {
            String featureName = expression.substring(PREFIX.length());
            VariableType targetType = context.getTargetType();
            if (!isDefaultFeatureName(featureName)) {
                for (TypeName typeName : targetType.getPossibleTypes()) {
                    Iterator<EClass> possibleEClasses = Iterators.filter(typeName.search(context.getAvailableEPackages()).iterator(), EClass.class);
                    boolean foundAtLeastOneValid = false;
                    while (!foundAtLeastOneValid && possibleEClasses.hasNext()) {
                        EClass cur = possibleEClasses.next();
                        foundAtLeastOneValid = hasFeatureName(cur, featureName);
                    }
                    if (!foundAtLeastOneValid) {
                        interpreterStatus.addStatus(InterpreterStatusFactory.createInterpreterStatus(context, IInterpreterStatus.ERROR, "The current element " + typeName.getCompleteName("::")
                                + " does not have the feature named : " + featureName));
                    }
                }
            }
        }
        return interpreterStatus;
    }

    private boolean hasFeatureName(EClass currentElementType, String featureName) {
        boolean hasFeatureName = currentElementType.getEStructuralFeature(featureName) != null;
        return hasFeatureName;
    }

    private boolean isDefaultFeatureName(String featureName) {
        boolean isDefaultFeatureName = false;
        for (String defaultFeatureName : DEFAULT_FEATURE_NAMES) {
            if (defaultFeatureName.equals(featureName)) {
                isDefaultFeatureName = true;
                break;
            }
        }
        return isDefaultFeatureName;
    }

}
