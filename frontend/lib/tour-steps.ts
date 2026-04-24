import { Step } from "react-joyride";

export const DASHBOARD_STEPS: Step[] = [
  {
    target: ".tour-dashboard-header",
    title: "Welcome to EquiGuard",
    content: "This is your central hub for fairness monitoring. From here, you can track bias across all your active models in real-time.",
    placement: "bottom",
    
  },
  {
    target: ".tour-sidebar",
    title: "Seamless Navigation",
    content: "Easily switch between Data Upload, Bias Detection, Model Evaluation, and our AI Assistant using the sidebar.",
    placement: "right",
    
  },
  {
    target: ".tour-new-audit",
    title: "Launch an Audit",
    content: "Ready for a new analysis? This button takes you directly to our streamlined data upload and configuration pipeline.",
    placement: "left",
    
  },
  {
    target: ".tour-stats-overview",
    title: "Performance Snapshot",
    content: "These metrics provide a high-level overview of your model's health. Monitor 'Overall Bias Score' and 'Disparity Reduction' at a glance.",
    placement: "bottom",
    
  },
  {
    target: ".tour-bias-chart",
    title: "Visualizing Impact",
    content: "See the tangible difference our fairness algorithms make. Compare performance metrics across demographic groups 'Before' and 'After' correction.",
    placement: "top",
    
  },
  {
    target: ".tour-bias-metrics",
    title: "Mathematical Integrity",
    content: "Deep dive into rigorous fairness indicators like Disparate Impact and Statistical Parity. EquiGuard ensures your models meet global regulatory standards.",
    placement: "left",
    
  },
  {
    target: ".tour-ai-explanation",
    title: "Human-Readable AI",
    content: "Complexity simplified. Our AI Assistant explains exactly *why* bias is occurring in your data using natural language.",
    placement: "top",
    
  },
  {
    target: ".tour-theme-toggle",
    title: "Your Workspace, Your Way",
    content: "Switch between light and dark modes to suit your preference. We've optimized every detail for maximum readability in both.",
    placement: "bottom",
    
  }
];

export const UPLOAD_STEPS: Step[] = [
  {
    target: ".tour-upload-header",
    title: "Data Intake",
    content: "The first step in your fairness journey. Upload your model's predictions and demographic data for a comprehensive audit.",
    placement: "bottom",
    
  },
  {
    target: ".tour-upload-dropzone",
    title: "Secure Upload",
    content: "Drag and drop your CSV files here. EquiGuard processes your data locally and securely using our advanced parsing engine.",
    placement: "bottom",
    
  },
  {
    target: ".tour-file-validation",
    title: "Integrity Check",
    content: "Once uploaded, we automatically validate your file structure, detecting headers and data types to ensure a smooth audit.",
    placement: "top",
    
  },
  {
    target: ".tour-configure-analysis",
    title: "Analysis Configuration",
    content: "Map your target variables and select protected attributes (e.g., Age, Gender, Ethnicity) that require fairness monitoring.",
    placement: "right",
    
  }
];

export const BIAS_DETECTION_STEPS: Step[] = [
  {
    target: ".tour-detection-header",
    title: "Precision Detection",
    content: "EquiGuard scans your data across hundreds of intersections to find even the most subtle forms of bias.",
    placement: "bottom",
    
  },
  {
    target: ".tour-metric-cards",
    title: "Fairness Indicators",
    content: "Visual status indicators help you quickly identify which demographic groups are experiencing significant disparities.",
    placement: "bottom",
    
  },
  {
    target: ".tour-disparity-chart",
    title: "Distribution Gap",
    content: "Explore the selection rate gap between different groups. This visualizes the 'unfavorable' outcomes in your model's current state.",
    placement: "top",
    
  },
  {
    target: ".tour-intersectionality",
    title: "Intersectional Bias",
    content: "Go beyond single attributes. Analyze how combined factors like 'Age + Gender' might lead to compounded disparities.",
    placement: "bottom",
    
  },
  {
    target: ".tour-apply-correction",
    title: "AI Mitigation",
    content: "Choose from our suite of state-of-the-art mitigation algorithms (Pre-processing, In-processing, or Post-processing) to correct bias.",
    placement: "left",
    
  }
];

export const REPORTS_STEPS: Step[] = [
  {
    target: ".tour-reports-header",
    title: "Audit Documentation",
    content: "Generate comprehensive, audit-ready PDF reports that detail every step of your fairness analysis.",
    placement: "bottom",
    
  },
  {
    target: ".tour-report-list",
    title: "Version History",
    content: "Maintain a clear audit trail. Compare different model iterations to demonstrate continuous fairness improvement.",
    placement: "top",
    
  },
  {
    target: ".tour-share-audit",
    title: "Stakeholder Sharing",
    content: "Easily share interactive or static reports with legal, compliance, and product teams for transparency.",
    placement: "left",
    
  },
  {
    target: ".tour-export-options",
    title: "Data Export",
    content: "Need the raw numbers? Export your fairness data in CSV or JSON for integration with your own BI tools.",
    placement: "left",
    
  }
];

export const AI_ASSISTANT_STEPS: Step[] = [
  {
    target: ".tour-ai-header",
    title: "Fairness GPT",
    content: "Meet your 24/7 fairness expert. Our AI is trained on thousands of ethical AI research papers and regulatory frameworks.",
    placement: "bottom",
    
  },
  {
    target: ".tour-chat-interface",
    title: "Exploratory Analysis",
    content: "Type naturally. Ask for recommendations, code snippets, or deep explanations for specific data anomalies.",
    placement: "top",
    
  },
  {
    target: ".tour-ai-capabilities",
    title: "Capability Overview",
    content: "Our AI can generate mitigation code, explain legal precedents, and even suggest better feature engineering strategies.",
    placement: "left",
    
  },
  {
    target: ".tour-suggested-questions",
    title: "Contextual Prompts",
    content: "We've pre-computed questions based on your specific audit results to help you find answers faster.",
    placement: "top",
    
  }
];

export const MODEL_EVALUATION_STEPS: Step[] = [
  {
    target: ".tour-evaluation-header",
    title: "Comparative Evaluation",
    content: "Validate the performance impact of your fairness corrections. See how 'Fair' models compare to 'Original' models.",
    placement: "bottom",
    
  },
  {
    target: ".tour-performance-metrics",
    title: "Multi-Objective Optimization",
    content: "Visualize the Pareto frontier of Accuracy vs. Fairness. Find the optimal balance for your specific business case.",
    placement: "bottom",
    
  },
  {
    target: ".tour-roc-comparison",
    title: "ROC Curves",
    content: "Compare model sensitivity and specificity across demographic slices to ensure equalized odds.",
    placement: "top",
    
  },
  {
    target: ".tour-confusion-matrix",
    title: "Error Disparity",
    content: "Drill down into false positive and false negative rates. Ensure no group is disproportionately harmed by model errors.",
    placement: "top",
    
  }
];

export const HISTORY_STEPS: Step[] = [
    {
        target: ".tour-history-header",
        title: "Audit History",
        content: "View all your past fairness audits and track how your models have improved over time.",
        placement: "bottom",
    },
    {
        target: ".tour-history-table",
        title: "Recent Audits",
        content: "Click on any previous audit to view its full report and re-examine the results.",
        placement: "top",
    }
];

export const SETTINGS_STEPS: Step[] = [
    {
        target: ".tour-settings-header",
        title: "Account Settings",
        content: "Manage your profile, organization details, and notification preferences.",
        placement: "bottom",
    },
    {
        target: ".tour-api-keys",
        title: "API Management",
        content: "Generate and manage API keys for integrating EquiGuard's fairness engine into your own pipelines.",
        placement: "top",
    }
];

export const DATA_SYNTHESIZER_STEPS: Step[] = [
  {
    target: ".tour-synthesizer-header",
    title: "AI Data Synthesis",
    content: "Address the root cause: data scarcity. Generate high-fidelity synthetic data to balance your training sets.",
    placement: "bottom",
    
  },
  {
    target: ".tour-synthesis-method",
    title: "SMOTE & CTGAN",
    content: "Select from advanced oversampling techniques or deep learning models to generate fair, non-identifiable data.",
    placement: "right",
    
  },
  {
    target: ".tour-synthesis-config",
    title: "Diversity Control",
    content: "Precisely control the demographic distribution of your synthetic output to reach perfect parity targets.",
    placement: "right",
    
  },
  {
    target: ".tour-generation-preview",
    title: "Data Preview & Audit",
    content: "Sample the generated records. We audit the synthetic data itself for bias before you even download it.",
    placement: "top",
    
  }
];
