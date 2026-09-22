import  { Component, type ErrorInfo, type ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-slate-800/80 border border-slate-700 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-orange-500/10 border border-primary-orange/30 flex items-center justify-center text-primary-orange">
              <AlertTriangle size={32} />
            </div>

            <h1 className="text-2xl font-serif font-bold text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
              An unexpected display issue occurred. Please refresh the page or return to the homepage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-orange hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <RefreshCw size={14} />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-slate-600"
              >
                <Home size={14} />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
