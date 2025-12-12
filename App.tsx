import { useState } from "react";
import { ReportBuilderSidebar, ReportConfig } from "./components/report-builder-sidebar";
import { LiveReportPreview } from "./components/live-report-preview";
import { ExportConfirmDialog } from "./components/export-confirm-dialog";
import { Button } from "./components/ui/button";
import { FileDown, Leaf } from "lucide-react";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [reportConfig, setReportConfig] = useState<ReportConfig>({
    sections: {
      "1.1": true,
      "17.4": true,
      "14.6": true,
      "13.3": true,
      "10.3a": false,
      "10.3b": false,
      "2.1": false,
      "3.2": false,
      "3.4": false,
      "3.5": false,
      "4.2": false,
      "4.3a": false,
      "5.1": false,
      "7.4a": false,
      "8.1": false,
      "8.3": false,
      "8.4": false,
      "9.1": false,
      "9.2": false,
      "14.1": false,
      "17.5": false,
    },
    sectionOrder: ["1.1", "17.4", "14.6", "13.3"],
    detailLevel: "summary",
    selectedYears: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  });

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Toaster />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-green-700">City of Edina</h1>
                <p className="text-gray-600">GreenStep Cities Report Builder</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowExportDialog(true)}
              className="bg-[#166534] hover:bg-[#14532d] text-white"
              size="lg"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Export to PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Sidebar + Preview */}
      <div className="flex-1 flex overflow-hidden">
        <ReportBuilderSidebar 
          config={reportConfig} 
          onConfigChange={setReportConfig}
        />
        <LiveReportPreview config={reportConfig} />
      </div>

      {/* Export Confirmation Dialog */}
      <ExportConfirmDialog 
        open={showExportDialog} 
        onOpenChange={setShowExportDialog}
      />
    </div>
  );
}